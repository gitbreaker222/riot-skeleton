// app tag controller
export default (tag) => {
  console.info('hello from app ctrl', tag.opts)

  // private vars / funcs
  const counterIntervalId = setInterval(() => {
    tag.counter += 1
    tag.update()
  }, 1000)

  // lifecycle and event-observers
  tag.on('unmount', () => {
    window.clearInterval(counterIntervalId)
  })

  //public props / methods
  tag.counter = 222
  tag.version = app.store.version

  tag.handleClick = (event) => {
    event.stopPropagation
    tag.showIt != tag.showIt

    const message = `v. ${app.store.version}`
    app.actions.alert(message)
  }


}
