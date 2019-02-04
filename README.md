*DISCONTINUED*

[![riot.js logo](https://riot.js.org/img/logo/riot240x.png)](https://riot.js.org/)

# Riot.js skeleton

Extended from riot.js [webpack example](https://github.com/riot/examples/tree/gh-pages/webpack) and [riot-webpack-starter](https://github.com/ashwamegh/riot-webpack-starter)

It already contained:

- webpack with dev-server and es6 support (babel)
- hot-module-replacement (HMR)

## Additional features in this repo

- [x] eslint (by seperating js from tag)
- [x] Store / Actions in central `app` instance
  - import shortcut: `import app from 'app'`
  - get data: `app.store.version` (via es6 getter)
  - set data: `app.store.version = 2` (via setter; emits event)
  - listen to changes: `app.on(app.events.CHANGE_VERSION, fn…)`
  - general actions: `app.actions.alert(message)`
  - access `app` in *dev-env* directly in browser-console for quick live lookups
- [x] data-pieces from `package.json` to client (version, etc.)
- [ ] SCSS
- [ ] environment settings (dev / prod / …)
- [ ] prod build
- [ ] (error-) notification component
- [ ] modal/dialog component
- [ ] unit-tests

## Run locally

Download or clone this repo.

Install packages.

```bash
$ npm install
```
And then run the server using `webpack-dev-server` or any possible way you know

```bash
$ npm start
```

- Open [http://localhost:3000/](http://localhost:3000/)
- Open [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/) for dev server with hot reloading.

## Technical details

## eslint

 I could not get the *eslint-html-plugin* to work on the script tags inside the riot-tag-html files (maybe only a problem with atom?). That is why **html** and **js** are separated here.

### Combining Tag HTML and JS

Watching js files for recompiling the tags, works by `import` js in tag script.

```HTML
<my-tag>
  <script>
    //import used tags here
    // […]
    //load controller
    import ctrl from "./my-tag.js"
    ctrl(this)
  </script>
</my-tag>
```

Using the `src` attribute instead won't work, because the file watcher looses connection to the js files and does not recompile on saved changes.

```HTML
<my-tag>
  <!-- this does not fully work -->
  <script src="./my-tag.js"></script>
</my-tag>
```
