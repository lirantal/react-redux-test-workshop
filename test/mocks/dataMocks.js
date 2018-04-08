const selectedGif = {
  id: 1,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/100/'
    },
    original: {
      url: 'fakeOriginalUrl'
    }
  }
}

const selectedGif2 = {
  id: 2,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/200/'
    },
    original: {
      url: 'fakeOriginalUrl'
    }
  }
}


const favoritesMap = new Map()
favoritesMap.set(1, selectedGif)
favoritesMap.set(2, selectedGif2)


const gifsList = [{
  id: 1,
  images: {
    downsized: {
      url: 'http://fakeimg.pl/100/'
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
        url: 'http://fakeimg.pl/200/'
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
  selectedGif, favoritesMap, gifsList, selectedGif2
}
