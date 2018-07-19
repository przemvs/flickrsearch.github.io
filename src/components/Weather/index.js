/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {geolocated} from 'react-geolocated'

import { getWeather } from 'actions/weather.action'
import weatherService from 'services/weather'

class Weather extends Component {
  state = {
    currentCity: 'Terespol'
  }

  async componentDidMount () {
    this.props.getWeather(`?q=${this.state.currentCity}`)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(prevProps)
    console.log(this.props)
    const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props

    if (coords === null) {
      if (isGeolocationAvailable && isGeolocationEnabled && coords) {
        console.log(coords)
        const promise = weatherService.fetchWeather(`?lat=${coords.latitude}&lon=${coords.longitude}`)
        const res = Promise.all(promise)
        console.log(res)
      }
    }
  }

  render () {
    const { weather, isLoading, isEmpty } = this.props

    return (
      <div>
        {!isLoading && !isEmpty && (
          <Fragment>
            <h1>{weather.city.name}</h1>
            <h2>{weather.list[0].main.temp - 273.15}</h2>
          </Fragment>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ weather }) {
  return {
    weather: weather.weather.data,
    isLoading: weather.weather.isLoading,
    isEmpty: weather.weather.isEmpty
  }
}

export default connect(mapStateToProps, { getWeather })(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  })(Weather)
)
