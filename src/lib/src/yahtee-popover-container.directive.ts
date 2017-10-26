import {Directive, ElementRef, EventEmitter, NgZone, OnDestroy, Output} from '@angular/core'
import {YahteePopoverCtaDirective} from './yahtee-popover-cta.directive'
import {YahteePopoverContentDirective} from './yahtee-popover-content.directive'

@Directive({
  selector: 'yahtee-popover-container,[yahtee-popover-container],[yahteePopoverContainer]',
  exportAs: 'yahteePopoverContainer',
})
export class YahteePopoverContainerDirective implements OnDestroy {

  private expands: HTMLElement[] = [] // not used atm

  private ctaDirs: YahteePopoverCtaDirective[] = [] //  not used atm
  private contentDir: YahteePopoverContentDirective | null

  private isOpened: boolean = false

  @Output() public popoverClose = new EventEmitter<void>()

  // not using HostListener as we can't define capture (the last argument) on it
  private onClick = (e: MouseEvent) => {
    const shouldNotClose = this.elRef.nativeElement.contains(e.target) ||
      this.expands.some(el => el.contains(<Node>e.target))

    if (!shouldNotClose) {
      this.ngZone.run(() => {
        this.close()
      })
    }

    return true
  }

  public registerCta(cta: YahteePopoverCtaDirective): void {
    this.ctaDirs.push(cta)
  }

  public registerContent(content: YahteePopoverContentDirective): void {
    this.contentDir = content
  }

  public open() {
    if (!this.isOpened) {
      this.contentDir!.create()
    }
    this.isOpened = true
  }

  public close() {
    if (this.isOpened) {
      this.contentDir!.destroy()
    }
    this.isOpened = false
    this.popoverClose.emit()
  }

  constructor(private elRef: ElementRef,
              private ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      if (window && typeof window.addEventListener === 'function') {
        window.addEventListener('click', this.onClick, true)
      }
    })
  }

  public ngOnDestroy(): void {
    if (window && typeof window.removeEventListener === 'function') {
      window.removeEventListener('click', this.onClick, true)
    }
  }

}
