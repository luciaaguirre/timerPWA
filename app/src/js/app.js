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
    }
  `
  static properties = {}

  render () {
    return html`
      <div id="timer">
        <header>
          <h1>Timer PWA</h1>
          <timer-player-component>
            <timer-component reverse="true" />
          </timer-player-component>
        </header>
      </div>
    `
  }
}
