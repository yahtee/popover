import {Component, Directive, ElementRef, EmbeddedViewRef, forwardRef, Inject, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core'
import {YahteePopoverContainerDirective} from './yahtee-popover-container.directive'
import {Style} from './positioning.service'

export interface YahteePopoverContent {
  create(style?: Style): void
  destroy(): void
}

@Directive({
  selector: '[yahteePopoverContent]',
})
export class YahteePopoverContentDirective implements OnInit, YahteePopoverContent {

  private embeddedViewRef: EmbeddedViewRef<void> | null

  public create(): void {
    this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef)
  }

  public destroy(): void {
    if (this.embeddedViewRef) {
      this.embeddedViewRef.destroy()
    }
  }

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<void>,
              private container: YahteePopoverContainerDirective,
              @Inject(forwardRef(() => YahteePopoverContentComponent))
              private contentCmp: YahteePopoverContentComponent) {
  }

  public ngOnInit(): void {
    if (!this.contentCmp) {
      this.container.registerContent(this)
    }
  }

}

@Component({
  selector: 'yahtee-popover-content',
  template: `
    <div *yahteePopoverContent>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
    }
  `],
})
export class YahteePopoverContentComponent implements OnInit, YahteePopoverContent {

  @ViewChild(YahteePopoverContentDirective)
  public popoverContentDirective: YahteePopoverContentDirective

  constructor(private container: YahteePopoverContainerDirective,
              private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  public create(style?: Style) {
    if (style != null) {
      const el = this.elementRef.nativeElement
      this.renderer.setStyle(el, 'top', `${style.top}%`)
      this.renderer.setStyle(el, 'left', `${style.left}%`)
      this.renderer.setStyle(el, 'transform', `translate(${style.x}%, ${style.y}%)`)
    }
    this.popoverContentDirective.create()
  }

  public destroy() {
    this.popoverContentDirective.destroy()
  }

  public ngOnInit(): void {
    this.container.registerContent(this)
  }

}
