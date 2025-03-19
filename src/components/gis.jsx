import React from 'react'
import './main.css'
import PageTitle from './PageTitle'

import Geoapp from './Geoapp'

function gis() {
  return (
    <main id='main' className='main'>
        <PageTitle page="Geo Portal"/>
       
        <Geoapp />
    </main>
  )
}

export default gis