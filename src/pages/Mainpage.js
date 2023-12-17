import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'

function Mainpage() {
  const [pdfSelect,setPdfSelect]=useState('')
  return (
    <div style={{display:'flex',height:'100%'}}>
      <div>
          <Sidebar setPdfSelect={setPdfSelect}/>
      </div>
      <div style={{width:'100%',height:'100%'}}>
          <Home pdfSelect={pdfSelect}/>
      </div>
    </div>
  )
}

export default Mainpage