import React from 'react'
import Student from './Student'

function App() {
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}>hello react js</h2>
        <div>
          <Student image={<img src= {'https://cdn.dummyjson.com/recipe-images/1.webp'} height={} width={}} name="HArshit soni" roll="0088" college="ABES Engeneering college" />
        </div>
      </div>
    </div>
  )
}

export default App