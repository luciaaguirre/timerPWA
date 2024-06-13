import { App } from './src/js/app.js'

customElements.define('app-component', App)
const app = document.getElementById('app')
app.innerHTML = <app-component></app-component>
