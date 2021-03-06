

export const REQUEST_GIFS = 'REQUEST_GIFS'

export const RECEIVE_GIFS = 'RECEIVE_GIFS'




const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'

//async action
// Async actions


export const get = (url) => {

  return window.fetch(url,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
}


export const success = (response) => {
  return response.json()
    .then((json) => {
      return json.data
    })
    .catch(() => (Promise.resolve())) // Some responses don't contain a body
}


export function requestGifs(term: null) {
  return (dispatch: () => void) => {

    let url = `${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`
    return get(url)
      .then(success)
      .then((data) => {
        dispatch(receiveGifs(data))
      })
      .catch((error) => {
        console.log('failed to fetch gifs', error)
      })

  }
}

export function receiveGifs(data) {
  return {
    type: RECEIVE_GIFS,
    payload: data
  }
}








