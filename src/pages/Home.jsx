import React from 'react'
import Getcars from '../components/getCars/Getcars'
// import Getpors from '../components/getPors/Getpors'
import { useState } from 'react'

function Home() {
const [data, setData] = useState([])
  return (
    <div>
   
      <Getcars setData={setData} data={data}/>
    </div>
  )
}

export default Home