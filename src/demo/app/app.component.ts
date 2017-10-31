import {Component} from '@angular/core'

@Component({
  selector: 'demo-app',
  template: `
    <yahtee-popover-container #container="yahteePopoverContainer"
                              position="center-left"
    >
      <div>
        <button yahteePopoverCta (click)="chosen = 'start'">Change to start</button>
        <button yahteePopoverCta (click)="chosen = 'end'">Change to end</button>
        <button (click)="container.toggle()">Toggle</button>
      </div>
      <yahtee-popover-content>
        <div class="popover-content">
          <pre>Chosen: {{ chosen }}</pre>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis debitis delectus, dolore expedita facere facilis
            maiores necessitatibus nihil nobis omnis provident quae,
            qui quod recusandae repudiandae unde voluptas voluptate voluptatem.
          </p>
        </div>
      </yahtee-popover-content>
    </yahtee-popover-container>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    yahtee-popover-container {
      position: relative;
    }

    .popover-content {
      width: 10rem;
      border: solid 1px black;
    }
  `],
})
export class AppComponent {
  chosen = null
}
