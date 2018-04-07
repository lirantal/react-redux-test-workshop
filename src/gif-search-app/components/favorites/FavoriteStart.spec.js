import test from 'tape'
import {mount} from 'enzyme'
import FavoriteStar from './FavoriteStar'
import React from 'react'

import {createDom} from '../../../../test/utils'

test.only('FavoriteStart: general rendering', async t => {

  t.plan(1)
  try {

    await createDom()
    const FavoriteStar = require('./FavoriteStar')
    const wrapper = mount(<FavoriteStar/>)
    t.ok(true, 'dummy test')

  }catch(error) {
    t.fail(error.message)
    t.end()
  }

})






