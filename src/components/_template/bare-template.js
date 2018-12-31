import app from 'app'

export default (tag) => {
  window.console.info(tag.opts, app.store.version)
}
