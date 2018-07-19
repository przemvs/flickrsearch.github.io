/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { getImages } from 'actions/flickr.action'
import {connect} from 'react-redux'
import Image from 'components/Image'
import './home.scss'

class Home extends Component {
  componentDidMount () {
    this.props.getImages(`dogs`)
  }

  render () {
    const {isLoading, isEmpty, data} = this.props

    console.log(this.props)
    return (
      <div>
        {!isLoading && !isEmpty && (
          <div className='container'>
            {data.photos.photo.map((image, index) => {
              return <Image key={index} image={image} />
            })}
          </div>
        )}
        teest
      </div>
    )
  }
}

function mapStateToProps ({ data }) {
  return {
    data: data.flickr.data,
    isLoading: data.flickr.isLoading,
    isEmpty: data.flickr.isEmpty
  }
}

export default connect(mapStateToProps, { getImages })(Home)
