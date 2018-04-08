const selectedGif = {
  id: 1,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/300/'
    },
    original: {
      url: 'fakeOriginalUrl'
    }
  }
}

const favoritesMap = new Map()
favoritesMap.set(1, selectedGif)


const gifsList = [{
  id: 1,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/300/'
    },
    original: {
      url: 'fakeOriginalUrl'
    }
  }
},
  {
    id: 2,
    images: {
      downsized: {
        url: 'http://fakeimg.pl/300/'
      },
      original: {
        url: 'fakeOriginalUrl'
      }
    }
  },
  {
    id: 3,
    images: {
      downsized: {
        url: 'http://fakeimg.pl/300/'
      },
      original: {
        url: 'fakeOriginalUrl'
      }
    }
  }
]

export {
  selectedGif, favoritesMap, gifsList
}
