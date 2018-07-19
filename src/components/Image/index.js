/* eslint-disable react/prop-types */
import React, {Component, Fragment} from 'react'
import { getOwnerInfo } from 'actions/flickr.action'
import {connect} from 'react-redux'
import StyledImage from './StyledImage'
import InfoBox from './InfoBox'

class Image extends Component {
  state = {
    detailsOpen: false
  }

  openInfo = image => {
    if (!this.state.detailsOpen) {
      this.props.getOwnerInfo(image.id, image.secret)
    }
    this.setState({detailsOpen: true})
  }

  closeInfo = () => this.setState({detailsOpen: false})

  render () {
    const {image, ownersEmpty, ownersLoading, data} = this.props

    return (
      <Fragment>
        <StyledImage img={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} onMouseOver={() => this.openInfo(image)} onMouseLeave={() => this.closeInfo()}>
          <InfoBox open={this.state.detailsOpen}>
            {!ownersLoading && !ownersEmpty ? (
              <Fragment>
                <div>Name: {data.photo.owner.realname ? data.photo.owner.realname : data.photo.owner.username}</div>
                <div>Description: {(data.photo.description._content || data.photo.description._content !== '') ? data.photo.description._content : '-'}</div>
                <div>Added data: {data.photo.dates.taken}</div>
              </Fragment>
            ) : (
              <div>loading</div>
            )}
          </InfoBox>
        </StyledImage>
      </Fragment>
    )
  }
}

function mapStateToProps ({ data }) {
  return {
    data: data.owner.details,
    ownersLoading: data.owner.isLoading,
    ownersEmpty: data.owner.isEmpty
  }
}

export default connect(mapStateToProps, { getOwnerInfo })(Image)
