'use strict'

import React from 'react'
import test from 'tape'

import {Provider} from 'react-redux'

import {createDom} from '../utils'

import ReactDOM from 'react-dom'

import {selectedGif} from '../mocks/dataMocks'


import configureStore from '../../src/gif-search-app/store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'
import {createInitialAppState} from '../../src/gif-search-app/store/rootReducer'

import GifSearchEngineContainer from '../../src/gif-search-app/containers/GifsSearchEngineContainer'
import Favorites from '../../src/gif-search-app/containers/FavoritesContainer'

import {Router, Route, createMemoryHistory} from 'react-router'

const gifsListMock = [selectedGif]


test('Integration Test: Close Popup Dialog', async t => {
  t.plan(11)
  let contentDiv = null
  try {
    await createDom()
    const docQuerySelector = document.querySelector.bind(document)
    const REACT_MODAL_PORTAL = 'ReactModalPortal'

    const store = configureStore(createInitialAppState(gifsListMock))

    const browserHistory = createMemoryHistory('/')
    const history = syncHistoryWithStore(browserHistory, store)

    // add content div to body
    const bodyElement = docQuerySelector('body')
    contentDiv = window.document.createElement('div')
    bodyElement.appendChild(contentDiv)

    require('fbjs/lib/ExecutionEnvironment').canUseDOM = true

    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={GifSearchEngineContainer}/>
          <Route path="favorites" component={Favorites}/>
        </Router>
      </Provider>, contentDiv)

    // console.log(document.body.innerHTML)

    t.pass('• go to show favorites')

    const favoritesLinkElement = docQuerySelector('.favoritesLink')
    favoritesLinkElement.click()

    t.equal(docQuerySelector('.gif-list').children.length, 0, 'favorite list is empty')

    t.pass('• click on Back Link')

    docQuerySelector('.goBackLink').click()
    // console.log(document.body.innerHTML)

    t.pass('• click on gif to open modal dialog')
    const selectedGif = docQuerySelector('.gif-item')
    selectedGif.click()

    let modalPortal = docQuerySelector(`.${REACT_MODAL_PORTAL}`)
    t.equal(modalPortal.children.length, 1, 'should render modal dialog with content ')

    t.pass('• set selected gif in modal as favorite')
    docQuerySelector('.star').click()

    t.equal(docQuerySelector('.star-favorite').className, 'star-favorite', 'should render favorite start ')

    t.pass('• close Modal Dialog')
    const closeButton = docQuerySelector('button')
    closeButton.click()

    modalPortal = docQuerySelector(`.${REACT_MODAL_PORTAL}`)

    t.equal(modalPortal, null, 'modal dialog should not be rendered after close')

    t.pass('• go to show favorites')

    const element = docQuerySelector('.favoritesLink')
    element.click()
    t.equal(docQuerySelector('.gif-list').children.length, 1, 'favorite list has a one gif ')

    // console.log(document.body.innerHTML)


  } catch (e) {
    console.log(e.stack)
    t.fail(e.message)
    t.end()
  } finally {
    ReactDOM.unmountComponentAtNode(contentDiv)
  }
})
