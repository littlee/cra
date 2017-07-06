import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import Demo from './containers/Demo'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="demo" component={Demo} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
