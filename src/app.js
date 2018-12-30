import app from 'app'

// app tag controller
export default (tag) => {
  console.info('hello from app ctrl', tag.opts)

  // private vars / funcs
  const counterIntervalId = setInterval(() => {
    tag.counter += 1
    tag.update()
  }, 2000)

  // lifecycle and event-observers
  tag.on('unmount', () => {
    window.clearInterval(counterIntervalId)
  })

  //public props / methods
  tag.counter = 222
  tag.version = app.store.version

  tag.handleVersionClick = (event) => {
    event.stopPropagation
    app.store.bumpVersion()
    const message = `v. ${app.store.version}`
    app.actions.alert(message)
  }

  app.on(app.events.CHANGE_VERSION, (newVersion) => {
    tag.version = newVersion
    tag.update() //manual update if triggert programatically
  })
}
