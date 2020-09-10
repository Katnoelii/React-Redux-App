  
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {fetchDogs} from '../actions/index'

const DoggoList = props => {
  useEffect(() => {
    props.fetchDogs()
  }, [])

  const [goodBoys, setGoodBoys] = useState(<div></div>)

  useEffect(() => {
    setGoodBoys(props.dogs.message.map(dog => (
      <img src={dog}></img>
    )))
  }, [props.isLoading])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>

      <h1 className='title'>A Collection of Good Boys!</h1>
      <button onClick={refreshPage}>Click for a new Shibe🌸</button>
      <div className="pupContainer">
        <div className="imgContainer">
          {goodBoys}
        </div>
      </div>

      {props.isLoading && <h4>Fetching some good boys...</h4>}
      {props.error && (
        <p className="error">Oh, no! {props.error}</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dogs: state.dogs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {fetchDogs}
  )(DoggoList)