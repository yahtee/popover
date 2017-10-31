import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YahteePopoverContainerDirective} from './yahtee-popover-container.directive'
import {YahteePopoverContentComponent, YahteePopoverContentDirective} from './yahtee-popover-content.directive'
import {YahteePopoverCtaDirective} from './yahtee-popover-cta.directive'
import {PositioningService} from './positioning.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    YahteePopoverContainerDirective,
    YahteePopoverContentDirective,
    YahteePopoverContentComponent,
    YahteePopoverCtaDirective,
  ],
  exports: [
    YahteePopoverContainerDirective,
    YahteePopoverContentDirective,
    YahteePopoverContentComponent,
    YahteePopoverCtaDirective,
  ],
  providers: [
    PositioningService,
  ],
})
export class YahteePopoverModule {
}
