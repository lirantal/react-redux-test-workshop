
import favoritesReducer from './favoritesReducer'
import {setFavoriteGif} from '../actions/favoritesActions'
import test from 'tape'

import {selectedGif, selectedGif2} from '../../../test/mocks/dataMocks'

test('favoritesReducer: unset favorite gif', t => {

  t.plan(1)

  try {

    const favMap = new Map()
    favMap.set(selectedGif.id, selectedGif)
    favMap.set(selectedGif2.id, selectedGif2)

    const expectedMap =  new Map()
    expectedMap.set(selectedGif.id, selectedGif)

    const resState = favoritesReducer({favoriteGifIdsMap: favMap}, setFavoriteGif(selectedGif2, false))
    t.same({favoriteGifIdsMap: expectedMap}, resState, 'unset favorite gif works properly')


  }catch (e) {
    t.fail(e.message)
    t.end()
  }
})