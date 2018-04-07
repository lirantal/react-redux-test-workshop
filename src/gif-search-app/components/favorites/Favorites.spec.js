import test from 'tape'
import {shallow, mount} from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import {createDom} from '../../../../test/utils'
import {selectedGif, favoritesMap} from '../../../../test/mocks/dataMocks'


import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'


import Favorites from './Favorites'


test('Favorites: rendering', t => {
  t.plan(5)
  try {

    const props = {
      actions: {
        closeModal: () => {
        },
        setFavoriteGif: () => {
        }
      }
    }
    const wrapper = shallow(<Favorites {...props}/>)

    t.equal(wrapper.find('.app').length, 1, 'should render one Favorites component')
    t.equal(wrapper.find('.appTitle').text(), 'My Favorites Gifs', 'should render correct Favorites title component')
    t.equal(wrapper.find(GifList).length, 1, 'should render one GifList component')
    t.equal(wrapper.find(GifModal).length, 1, 'should render one GifModal component')
    t.equal(wrapper.find(Link).length, 1, 'should render one Link component')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('Favorites: test isFavoriteGif method', async t => {
    t.plan(2)
    try {

      const props = {
        selectedGif: selectedGif,
        favoriteGifIdsMap: favoritesMap,
        actions: {
          closeModal: sinon.spy(),
          setFavoriteGif: sinon.spy(),
          openModal: sinon.spy(),
        }
      }

      await createDom()
      const wrapper = mount(<Favorites {...props}/>)

      let res = wrapper.instance().isFavoriteGif(null, favoritesMap)
      t.ok(!res, 'isFavoriteGif return correct output, what no selected gif is provided')
      res = wrapper.instance().isFavoriteGif(selectedGif, favoritesMap)
      t.ok(res, 'isFavoriteGif return correct output, what selected gif is provided')
    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
      t.end()
    }
  }
)

test('Favorites: test openModal method invocation', async t => {
    t.plan(1)
    try {

      const props = {
        selectedGif: selectedGif,
        favoriteGifIdsMap: favoritesMap,
        actions: {
          closeModal: sinon.spy(),
          setFavoriteGif: sinon.spy(),
          openModal: sinon.spy()
        }
      }

      await createDom()
      const wrapper = mount(<Favorites {...props}/>)
      wrapper.find('.gif-item').simulate('click')
      t.ok(props.actions.openModal.called, 'openModal was invoked')
    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
      t.end()
    }
  }
)
