import test from 'tape'
import {mount} from 'enzyme'
import FavoriteStar from './FavoriteStar'
import React from 'react'
import sinon from 'sinon'

import {createDom} from '../../../../test/utils'

test('FavoriteStart: rendering regular start', async t => {

  t.plan(1)
  try {

    await createDom()
    const wrapper = mount(<FavoriteStar/>)

    t.equals(wrapper.find('.star').length, 1, 'should render regular star')

  } catch (error) {
    t.fail(error.message)
    t.end()
  }

})

test('FavoriteStart: rendering favorite star', async t => {

  t.plan(1)
  try {

    await createDom()
    const wrapper = mount(<FavoriteStar isFavorite={true}/>)

    t.equals(wrapper.find('.star-favorite').length, 1, 'should render favorite star')

  } catch (error) {
    t.fail(error.message)
    t.end()
  }

})

test('FavoriteStart: handle click and check state component', async t => {

  t.plan(2)
  try {

    await createDom()
    const wrapper = mount(<FavoriteStar isFavorite={false}/>)
    const mainDivElement = wrapper.find('.star')
    const stateBeforeClick = wrapper.state()
    t.deepEqual(stateBeforeClick, {isFavorite: false}, 'initial component state was set correctly')
    mainDivElement.simulate('click')
    const stateAfterClick = wrapper.state()
    t.deepEqual(stateAfterClick, {isFavorite: true}, 'component state was updated correctly')

  } catch (error) {
    t.fail(error.message)
    t.end()
  }

})

test('FavoriteStart: check onFavoriteChange CB invocation', async t => {

  t.plan(2)
  try {
    await createDom()
    const onFavoriteChangeSpy = sinon.spy()
    const wrapper = mount(<FavoriteStar onFavoriteChange={onFavoriteChangeSpy} isFavorite={false}/>)
    const mainDivElement = wrapper.find('.star')
    mainDivElement.simulate('click')
    t.ok(onFavoriteChangeSpy.calledOnce, 'onFavoriteChange was called once')
    // spy.args returns array of args array
    t.equals(onFavoriteChangeSpy.args[0][0], true, 'onFavoriteChange was called with correct args')

  } catch (error) {
    t.fail(error.message)
    t.end()
  }

})






