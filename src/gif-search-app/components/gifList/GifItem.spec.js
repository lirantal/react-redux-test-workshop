import {test} from 'tape'
import {shallow, mount} from 'enzyme'
import React from 'react'
import GifItem from './GifItem'
import sinon from 'sinon'


test('GifItem: rendering without required props', t => {
  t.plan(2)
  try {
    const wrapper = shallow(<GifItem/>)
    const mainDivElement = wrapper.find('.gif-item')
    t.equals(mainDivElement.length, 1, 'should render one GifItem component')

    const gifImgElement = wrapper.find('.gif-img')
    t.equals(gifImgElement.length, 0, 'should not render gif image, when no gif prop is provided')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifItem: rendering with required props', t => {
  t.plan(2)
  try {
    const gifMock = {
       images: {
         downsized: {
           url: 'Url'
         }
       }
    }
    const wrapper = shallow(<GifItem gif={gifMock}/>)
    const mainDivElement = wrapper.find('.gif-item')
    t.equals(mainDivElement.length, 1, 'should render one GifItem component')

    const gifImgElement = wrapper.find('.gif-img')
    t.equals(gifImgElement.length, 1, 'should render gif image, when gif prop is provided')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifItem: onGifSelect invocation', t => {
  t.plan(1)
  try {
    const gifMock = {
      images: {
        downsized: {
          url: 'Url'
        }
      }
    }
    const onGifSelectSpy = sinon.spy()
    const wrapper = shallow(<GifItem onGifSelect={onGifSelectSpy} gif={gifMock}/>)
    const mainDivElement = wrapper.find('.gif-item')
    mainDivElement.simulate('click')
    t.ok(onGifSelectSpy.calledOnce, 'should invoke onGifSelect on click')
  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifItem: check onGifSelect was not invoke, if no CB provided', t => {

  t.plan(1)
  try{
    const gifMock = {
      images: {
        downsized: {
          url: 'Url'
        }
      }
    }
    const onGifSelectSpy = sinon.spy()
    const wrapper = shallow(<GifItem  gif={gifMock}/>)
    const mainDivElement = wrapper.find('.gif-item')
    mainDivElement.simulate('click')
    t.ok(onGifSelectSpy.notCalled, 'should not invoke onGifSelect on click')

  }catch(error) {
    t.fail(error.message)
    t.end()
  }

})



