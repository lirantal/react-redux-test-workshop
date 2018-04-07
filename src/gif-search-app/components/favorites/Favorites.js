import React, {Component} from 'react'

import PropTypes from 'prop-types'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'


import {Link} from 'react-router'

import '../../../styles/app.css'


export default class Favorites extends Component {

  static propTypes = {
    favoriteGifIdsMap: PropTypes.object,
    modalIsOpen: PropTypes.bool,
    selectedGif: PropTypes.object,
    actions: PropTypes.any
  }

  static defaultProps = {
    favoriteGifIdsMap: new Map(),
    modalIsOpen: false
  }


  isFavoriteGif = (selectedGif, gifsMap) => {
    if (!selectedGif) {
      return false
    }
    return (gifsMap.get(selectedGif.id) !== undefined)
  }

  render() {
    const {favoriteGifIdsMap, selectedGif, modalIsOpen} = this.props

    return (
      <div className="app">
        <div className="appTitle">My Favorites Gifs</div>
        <div className="goBack">
          <Link to='/'>Go Back</Link>
        </div>
        <GifList gifs={Array.from(favoriteGifIdsMap.values())}
                 onGifSelect={selectedGif => this.props.actions.openModal({selectedGif})}/>
        <GifModal modalIsOpen={modalIsOpen}
                  selectedGif={selectedGif}
                  isFavorite={this.isFavoriteGif(this.props.selectedGif, this.props.favoriteGifIdsMap)}
                  setFavoriteGif={this.props.actions.setFavoriteGif}
                  onRequestClose={() => this.props.actions.closeModal()}/>
      </div>
    )
  }
}
