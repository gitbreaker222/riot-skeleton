import './components/random.tag.html'

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
    tag.unmount()
  }

  //observers
  tag.on('unmount', () => {
    window.clearInterval(counterIntervalId)
  })
}
