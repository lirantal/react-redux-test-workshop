import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import FavoriteStar from './../favorites/FavoriteStar'


export default class GifModal extends React.Component {

  static propTypes = {
    selectedGif: PropTypes.object,
    isFavorite: PropTypes.bool,
    setFavoriteGif: PropTypes.func,
    onRequestClose: PropTypes.func,
    modalIsOpen: PropTypes.bool
  }

  handleFavoriteChange = (isFavorite) => {
    const {setFavoriteGif, selectedGif} = this.props
    if (setFavoriteGif) {
      setFavoriteGif(selectedGif, isFavorite)
    }
  }

  onCloseModal = () => {
    const {onRequestClose} = this.props
    if (onRequestClose) {
      return onRequestClose()
    }
  }

  render() {
    const {selectedGif, isFavorite, modalIsOpen} = this.props
    if (!this.props.selectedGif) {
      return <div/>
    }


    return (

      <Modal contentLabel='myLabel'
             className='gif-modal'
             overlayClassName='modal-overlay'
             isOpen={modalIsOpen}
             onRequestClose={this.onCloseModal}>
        <div>
          <FavoriteStar isFavorite={isFavorite} onFavoriteChange={this.handleFavoriteChange}/>
          <p><strong>Details</strong></p>
          <img alt='' src={(selectedGif) ? selectedGif.images.original.url : ''}/>
          <p><strong>Source:</strong> <a href={this.props.selectedGif.source}>{this.props.selectedGif.source}</a></p>
          <p><strong>Rating:</strong> {this.props.selectedGif.rating}</p>
          <button className='closeModalBtn' onClick={this.onCloseModal}>close</button>
        </div>
      </Modal>
    )
  }


}