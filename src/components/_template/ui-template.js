import app from 'app'

export default (tag) => {
  console.info('hello from template ctrl', tag.opts)

  tag.aVariable = 222

  tag.handleAnInput = (event) => {
    event.stopPropagation
    const now = new Date().toGMTString()
    app.actions.alert(`Hello human. This is now: ${now}`)
    tag.aVariable = now
  }
}
