export default (tag) => {
  tag.number = null
  tag.logs = []

  tag.generate = (e) => {
    tag.logs.push({ text: `Generate button clicked. Event type is '${e.type}'`, })
    tag.number = Math.floor(Math.random()*10000)
  }

  tag.clearLogs = () => {
    tag.logs = []
  }

  tag.generate({ type: 'custom', })
}
