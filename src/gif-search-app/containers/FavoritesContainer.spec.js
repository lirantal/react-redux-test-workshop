import {mount} from 'enzyme'
import React from 'react'
import test from 'tape'
import {Provider} from 'react-redux'
import {createDom} from '../../../test/utils'
import configureStore from '../store/configureStore'
import {favoritesMap} from '../../../test/mocks/dataMocks'
import {createInitialAppState} from '../store/rootReducer'
import FavoritesContainer from './FavoritesContainer'

test('FavoritesContainer: connect to Redux store', async t => {
    t.plan(1)
    try {

      await createDom()
      const store = configureStore(createInitialAppState(null, favoritesMap))
      const wrapper = mount(
        <Provider store={store}>
          <FavoritesContainer store={store}/>
        </Provider>
      )
      t.equal(wrapper.find('.gif-item').length, 2, 'should render 2 gifs')

    } catch
      (e) {
      t.fail(e.message)
      t.end()
    }
  }
)






