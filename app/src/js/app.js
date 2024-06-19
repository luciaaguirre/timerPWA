import { LitElement, html, css } from 'lit'
import {
  TimerComponent,
  TimerPlayerComponent
} from '../../../lib/timer-component'

export class App extends LitElement {
  static styles = css`
    #timer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 auto ;
      color: var(--text-color);
      background-color: var(--secondary-color);
      box-shadow: 0 2px 3px 0 rgba (0, 0, 0, 0.6);
      padding: 1rem 2rem;
    }
    timer-player-component {
      --timer-component-font-family: "VR_Standard", serif;
      --timer-component-part-color: var(--neutral-color);
      --timer-component-part-padding: 10px;
      --timer-component-part-box-shadow: 0 2px 3px o rgba (0, 0, 0, 0.2);
      --timer-component-part-border-radius: 5px;
      --timer-component-join-padding: 10px;
      --timer-player-component-color: var(--neutral-light-color);
      --timer-player-component-part-color: var(--primary-lightest-color);
      --timer-player-component-button-padding: 5px 30px;
      --timer-player-component-button-margin: 0 auto;
      --timer-player-component-button-border-radius: 5px:
      --timer-player-component-button-border: none;
      --timer-player-component-play-color: var(--primary-lightest-color);
      --timer-player-component-play-background-color: var(--primart-color);
      --timer-player-component-action-margin: 20px 0 0 0;
      --timer-player-component-status-color: var(--info-color);
      --timer-player-component-font-size: 1..5rem;
      --timer-player-component-status-margin: 0 0 20px 0;

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
