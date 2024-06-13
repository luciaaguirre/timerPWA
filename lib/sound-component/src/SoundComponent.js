import { LitElement, html, css } from 'lit'
import { TRUE } from 'sass'

export class SoundComponent extends LitElement {
  static properties = {
    sound: { type: String, attribute: true }
  }

  constructor () {
    super()
  }

  render () {
    return html` <audio src="${this.sound}"></audio>`
  }
  play () {
    this.shadowRoot.querySelector('audio').play()
  }
}
window.customElements('sound-component', SoundComponent)
