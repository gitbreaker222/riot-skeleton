import {app,} from './main.js'

export default (tag) => {
  console.info('hello from app ctrl', tag.opts)

  // private
  const counterIntervalId = setInterval(() => {
    tag.test += 1
    tag.update()
  }, 1000)

  //public fields
  tag.test = 222
  tag.showIt = true
  //public functions
  tag.handleToggle = (event) => {
    event.stopPropagation
    tag.showIt != tag.showIt
    app.trigger(app.events.TOGGLE)
  }

  //observers
  tag.on('unmount', () => {
    window.clearInterval(counterIntervalId)
  })
  app.on(app.events.TOGGLE, () => {
    tag.unmount()
  })
}
