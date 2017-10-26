import {Directive, HostListener, OnInit} from '@angular/core'
import {YahteePopoverContainerDirective} from './yahtee-popover-container.directive'

@Directive({
  selector: 'yahtee-popover-cta,[yahtee-popover-cta],[yahteePopoverCta]',
})
export class YahteePopoverCtaDirective implements OnInit {

  @HostListener('click')
  public onClick() {
    this.container.open()
  }

  constructor(private container: YahteePopoverContainerDirective) {
  }

  public ngOnInit(): void {
    this.container.registerCta(this)
  }

}
