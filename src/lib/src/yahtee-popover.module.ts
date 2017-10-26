import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YahteePopoverContainerDirective} from './yahtee-popover-container.directive'
import {YahteePopoverContentDirective} from './yahtee-popover-content.directive'
import {YahteePopoverCtaDirective} from './yahtee-popover-cta.directive'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    YahteePopoverContainerDirective,
    YahteePopoverContentDirective,
    YahteePopoverCtaDirective,
  ],
  exports: [
    YahteePopoverContainerDirective,
    YahteePopoverContentDirective,
    YahteePopoverCtaDirective,
  ],
})
export class YahteePopoverModule {
}
