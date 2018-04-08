import test from 'tape'
import {mount, shallow} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import {selectedGif, favoritesMap} from '../../../../test/mocks/dataMocks'
import {createDom} from '../../../../test/utils'
import GifModal from './GifModal'

test.skip('GifModal: rendering', async t => {
  t.plan(1)
  try {

    await createDom()
    const props = {
      selectedGif: selectedGif,
      isFavorite: true,
      setFavoriteGif: sinon.spy(),
      onRequestClose: sinon.spy(),
      modalIsOpen: false
    }
    const wrapper = mount(<GifModal/>)
    t.ok('true', 'dummy test')

    console.log(wrapper.html())

  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})