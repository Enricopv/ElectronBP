/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './App'
import { Browser } from './components/pages'

export const Routes = () => {
  return (
    <App>
      <Switch>
        <Route path="/" component={Browser} />
      </Switch>
    </App>
  )
}
