import {Directive, EmbeddedViewRef, TemplateRef, ViewContainerRef} from '@angular/core'
import {YahteePopoverContainerDirective} from './yahtee-popover-container.directive'

@Directive({
  selector: '[yahteePopoverContent]',
})
export class YahteePopoverContentDirective {

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
              private container: YahteePopoverContainerDirective) {
  }

  public ngOnInit(): void {
    this.container.registerContent(this)
  }

}
