import riot from 'riot'
import {version} from '../../package.json'

export const events = {
  ALERT: 'ALERT',
  SET_VERSION: 'SET_VERSION',
  CHANGE_TITLE: 'CHANGE_TITLE',
}

const App = (function() {
  const privateProps = new WeakMap()
  let trigger
  let store

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
      trigger(events.SET_VERSION, version)
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
      store.bumpVersion()
      trigger(events.ALERT)
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
      //dev logger
      // this.on('*', (event, args) => {
      //   console.log(`[store] ${event}, ${args}`)
      // })
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
//riot.mixin({ app }) //is this better?
window.app = new App()
