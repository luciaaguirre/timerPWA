import { LitElement, html, css } from 'lit'
import {
  TimerComponent,
  TimerPlayerComponent
} from '../../../lib/timer-component'

export class App extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--timer-component-part-color);
      background-color: var(--text-color);
      padding: 0.5rem;
      box-shadow: 5px 5px 10px grey;
      border-radius: 0.5rem;
      margin: 0.5rem;
    }
  `
  static properties = {}

  render () {
    return html`
      <div id="timer">
        <header>
          <h1>Timer PWA</h1>
          <timer-player-component>
            <timer-component> </timer-component>
          </timer-player-component>
        </header>
      </div>
    `
  }
}
