import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {pdfUploadApi,getAllPdf} from '../Service/Allapi'
import {BASE_URL} from '../Service/baseurl'
import { FaRegFilePdf } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



function Sidebar({setPdfSelect}) {
    const [fileData,setFileData]=useState({})
    const [notPdf,setNotPdf]=useState(false)
    const [allPdf,SetAllPdf]=useState([])
    const [newPdfUpdate,setNEwPdfUpdate]=useState(false)
    const [closs,setCloss]=useState(true)
    const uploadFile=(e)=>{
        setFileData(e.target.files[0])
    }
    const fileUp=async()=>{
        if(fileData.type=='application/pdf'){
            setNotPdf(false)
            const configHeader={
                "Content-type":"multipart/form-data"
            }
            const data=new FormData()

            data.append("file-upload",fileData)
            const Response= await pdfUploadApi(data,configHeader)
            if(Response.status>=200 && Response.status<300){
                alert(Response.data)
                setNEwPdfUpdate(true)
            }
            else{
                alert("Not Add pdf")
            }
        }else{
            setNotPdf(true)
        }
    }
    const getAllPdfData=async()=>{
        const Response=await getAllPdf()
        if(Response.status>=200&&Response.status<300){
            SetAllPdf(Response.data)
            setNEwPdfUpdate(false)
        }else{
            alert("Empty PDF")
        }
    }
    console.log(allPdf)
    useEffect(()=>{
        getAllPdfData()
    },[newPdfUpdate])
  return (
   <div>
        {closs?(
            <div className='px-5'>
            <div className='text-center'>
                <div style={{display:'flex',justifyContent: 'space-between',paddingTop:'1rem'}}>
                    <h4 style={{paddingTop: '1rem'}}>Upload file</h4>
                    <lord-icon
                        src="https://cdn.lordicon.com/nqtddedc.json"
                        trigger="hover"
                        style={{width:"50px",height:"50px"}}
                        onClick={()=>setCloss(false)}>
                            
                    </lord-icon>
                </div><hr/>
                <input onChange={(e)=>{uploadFile(e)}} type='file' id='fileUp'/><br></br>
                {notPdf&&
                    <p className='text-danger'>only excepting pdf</p>
                }
                <button onClick={()=>fileUp()} type='button' className='btn btn-outline-success' >Success</button>
            </div>
            <div>
                {allPdf.length>0?allPdf.map(i=>(
                    <div onClick={()=>(setPdfSelect(i),setCloss(false))} style={{width:'auto',height:'3rem',display:'flex',padding:'1rem 0',gap:'1rem',cursor:'pointer'}}>
                        <FaRegFilePdf className='fs-3'/>
                        <h6>{i.pdfName.slice(18,)}</h6>
                    </div>
                )):(
                    <div><h4>Pdf Empty</h4></div>
                )
                }
            </div>
        </div>
        ):(
            <div className='py-3 px-1'><FaArrowRightLong  className='fs-2' onClick={()=>setCloss(true)}/></div>
        )
            }
   </div> 
  )
}

export default Sidebar