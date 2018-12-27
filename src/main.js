import 'riot-hot-reload'
import './app.tag.html'
import riot from 'riot'

export const app = {}
riot.observerble(app)

riot.mount('app', {
  version: '0.0.0',
})
