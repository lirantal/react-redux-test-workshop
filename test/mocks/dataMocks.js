const selectedGif = {
  id: '123',
  images: {
    downsized: {
      url: 'fakeDownsizedUrl'
    },
    original: {
      url: 'fakeOriginalUrl'
    }
  },
}

const favoritesMap = new Map()
favoritesMap.set('123', selectedGif)


const gifsList = [{
  id: 1,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/300/'
    }
  }
},
  {
    id: 1,
    images: {
      downsized: {
        url: 'http://fakeimg.pl/300/'
      }
    }
  },
  {
    id: 3,
    images: {
      downsized: {
        url: 'http://fakeimg.pl/300/'
      }
    }
  }
]

export {
  selectedGif, favoritesMap, gifsList
}
