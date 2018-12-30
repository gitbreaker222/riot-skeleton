import {app} from '../../app.js'

export default (tag) => {
  window.console.info(tag.opts, app.version)
}
