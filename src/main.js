import 'riot-hot-reload'
import './app.tag.html'
import riot from 'riot'

export const app = {
  events: {
    TOGGLE: 'TOGGLE',
  },
}
riot.observable(app)

riot.mount('app', {
  version: '0.0.0',
})
