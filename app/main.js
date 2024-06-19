import { App } from './src/js/app.js'
import './src/scss/global.scss'
/* import {} from '../lib/sound-component/dist/main.bundle.js'
 */ window.customElements.define('app-component', App)
const app = document.getElementById('app')
app.innerHTML = '<app-component></app-component>'
