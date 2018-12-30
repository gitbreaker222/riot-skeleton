export default (tag) => {
  console.info('hello from template ctrl', tag.opts, app.version)
  tag.aVariable = 222
  tag.handleAnInput = (event) => {
    event.stopPropagation
    const now = new Date().toGMTString()
    app.trigger(app.events.ALERT, `hello human. This is now: ${now}`)
    tag.aVariable = now
  }
}
