import React, {Component} from 'react';
import SearchBar from '../searchBar/SearchBar'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

export default class GifsSearchEngine extends Component {

  static propTypes = {
    favoriteGifIdsMap: PropTypes.object,
    gifs: PropTypes.arrayOf(PropTypes.object),
    modalIsOpen:PropTypes.bool,
    selectedGif: PropTypes.object,
    actions: PropTypes.object
  }

  static defaultProps = {
    favoriteGifIdsMap: new Map(),
    gifs: []
}

  isFavoriteGif = (selectedGif, favoriteGifIdsMap, ) => {
    if (!selectedGif || !favoriteGifIdsMap) {
      return false
    }

    return (favoriteGifIdsMap.get(selectedGif.id) !== undefined)
  }

  render() {

    return (
      <div className="app">
        <div className="appTitle">Gifs Search Engine</div>
        <div className="searchFavoritesHolder">
          <SearchBar onTermChange={this.props.actions.requestGifs}/>
          <div className="favoriteLinkHolder">
            <Link className='favoritesLink' to='/favorites'>Show Favorites</Link>
          </div>
        </div>
        <GifList gifs={this.props.gifs} onGifSelect={selectedGif => this.props.actions.openModal({selectedGif})}/>
        <GifModal modalIsOpen={this.props.modalIsOpen}
                  selectedGif={this.props.selectedGif}
                  isFavorite={this.isFavoriteGif(this.props.selectedGif, this.props.favoriteGifIdsMap)}
                  setFavoriteGif={this.props.actions.setFavoriteGif}
                  onRequestClose={() => this.props.actions.closeModal()}/>
      </div>
    )
  }
}
 

