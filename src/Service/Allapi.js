import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequist";

export const pdfUploadApi=(body,header)=>{
    return commonRequest("post",`${BASE_URL}/express/pfd-file/store`,body,header)
}
export const getAllPdf=()=>{
    return commonRequest('get',`${BASE_URL}/express/file`,'')
}