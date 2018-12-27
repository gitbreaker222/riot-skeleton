this.number = null
this.logs = []

this.generate = (e) => {
  this.logs.push({ text: `Generate button clicked. Event type is ${e.type}`, })
  this.number = Math.floor(Math.random()*10000)
  console.log('###', this.number)
}

this.clearLogs = () => {
  this.logs = []
}

this.generate({ type: 'custom', })
