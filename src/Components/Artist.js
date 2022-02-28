import '../App.css'
import Container from 'react-bootstrap/Container'
import { useState, useRef } from 'react'
import Image from 'react-bootstrap/Image'
import Events from './Events'
import '../Css/Artist.css'
import React from 'react'

{
  /*this component displays the artist's image, facebook link and events (coloured icon if available otherwise gray)*/
}
const Artist = ({ eventsinfo }) => {
  {
    /*this functions shows/hides the event list section, also autoscrolls to it 1s after button is clicked*/
  }

  {
    /*state variable and its control function -> events section show/dont show*/
  }

  return (
    <Container className='searchSection'>
      {/*shows image on top which is an overlay that shows the icons and name*/}

      <h1 data-testid='header'>Search Result</h1>

      {/*if show is true show event section else keep it hidden */}

      <div>
        <Events eventsinfo={eventsinfo} />
      </div>
    </Container>
  )
}

export default Artist
