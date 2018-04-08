import test from 'tape'
import {mount, shallow} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import {selectedGif, favoritesMap} from '../../../../test/mocks/dataMocks'
import {createDom} from '../../../../test/utils'
import Modal from 'react-modal'
import FavoriteStar from './../favorites/FavoriteStar'
import GifModal from './GifModal'


test('GifModal: rendering react modal', async t => {
  t.plan(3)
  try {

    const props = {
      selectedGif: selectedGif,
      isFavorite: true,
      setFavoriteGif: sinon.spy(),
      onRequestClose: sinon.spy(),
      modalIsOpen: false
    }

    const wrapper = shallow(<GifModal {...props}/>)
    t.equal(wrapper.find(Modal).length, 1, 'should render one rect-Modal component')
    t.equal(wrapper.find(FavoriteStar).length, 1, 'should render FavoriteStar')
    t.equal(wrapper.find('img').length, 1, 'should render FavoriteStar')


  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifModal: rendering fallback, what no selectedGif provided', async t => {
  t.plan(1)
  try {

    const props = {
      isFavorite: true,
      setFavoriteGif: sinon.spy(),
      onRequestClose: sinon.spy(),
      modalIsOpen: false
    }

    const wrapper = shallow(<GifModal {...props}/>)
    t.equal(wrapper.find(Modal).length, 0, 'should not render rect-Modal component without selectedGif')


  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifModal: check CBs invocation - 1', async t => {
  t.plan(2)
  try {

    const props = {
      selectedGif: selectedGif,
      isFavorite: true,
      setFavoriteGif: sinon.spy(),
      onRequestClose: sinon.spy(),
      modalIsOpen: false
    }

    const wrapper = shallow(<GifModal {...props}/>)
    wrapper.find(FavoriteStar).prop('onFavoriteChange')()
    t.ok(props.setFavoriteGif.calledOnce, 'setFavoriteGif was called onFavoriteChange of FavoriteStar was invoked ')

    wrapper.find('button').simulate('click')
    t.ok(props.onRequestClose.calledOnce, 'onRequestClose was called onClick of close modal button ')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

