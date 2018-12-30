import riot from 'riot'
import {version} from '../package.json'

const App = (function() {
  const privateProps = new WeakMap()
  let trigger
  let store
  const events = {
    ALERT: 'ALERT',
    CHANGE_VERSION: 'CHANGE_VERSION',
    CHANGE_TITLE: 'CHANGE_TITLE',
  }


  class Store {
    constructor() {
      // initial state
      this._version = version
      this._title = '#'
    }


    get version() {
      return this._version
    }
    set version(version) {
      this._version = version
      trigger(events.CHANGE_VERSION, version)
    }
    bumpVersion() {
      const versionParts = this.version.split('.')
      const bumped = Number(versionParts[2]) + 1
      versionParts[2] = bumped
      this.version = versionParts.join('.')
    }


    get title() {
      return this._title
    }
    set title(title) {
      this._title = title
      trigger(events.CHANGE_TITLE, title)
    }
  }


  class Actions {
    alert(message) {
      alert(message)
      trigger(events.ALERT, message)
    }
  }


  class App {
    constructor() {
      riot.observable(this)
      trigger = this.trigger
      store = new Store(this)
      const actions = new Actions(this)
      privateProps.set(this, {
        store,
        actions,
      })
      this.events = events
      //DEV logger
      this.on('*', (event, args) => {
        console.log(`[store] ${event}, ${args}`)
      })
    }
    get store() {
      return privateProps.get(this).store
    }
    get actions() {
      return privateProps.get(this).actions
    }
  }
  return App
})()


const app = new App()
export default app

//DEV direct access via console
window.app = app
