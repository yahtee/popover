import {Component} from '@angular/core'

@Component({
  selector: 'demo-app',
  template: `
    <yahtee-popover-container style="background-color: red; display: block">
      <div>
        <button yahteePopoverCta (click)="chosen = 'start'">Start</button>
        <button yahteePopoverCta (click)="chosen = 'end'">End</button>
      </div>
      <div *yahteePopoverContentDirective>
        <pre>Chosen: {{ chosen }}</pre>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis debitis delectus, dolore expedita facere facilis
          maiores necessitatibus nihil nobis omnis provident quae,
          qui quod recusandae repudiandae unde voluptas voluptate voluptatem.
        </p>
      </div>
    </yahtee-popover-container>
  `,
})
export class AppComponent {
  chosen = null
}
