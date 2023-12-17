import React from 'react'
import { BASE_URL } from '../Service/baseurl'

function Home({pdfSelect}) {
  console.log(pdfSelect)
  return (
    <div style={{with:'auto',height:'100%'}}>
        {pdfSelect&&
          <div style={{display:'flex',flexDirection: 'column'}}>
            <object data={`${BASE_URL}/pdfFile/${pdfSelect.pdfName}`} width="100%" height="600rem"> </object> 
            <div className='text-end py-3'>
              <button className='btn btn-outline-success' style={{width:'8rem'}}>Create PDF</button>
            </div>
          </div>
        }
    </div>
  )
}

export default Home