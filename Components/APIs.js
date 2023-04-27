import axios from "axios";

export const BASEURL = "https://node.gflightmode.com/api/v1"

export const RequstAPI = async()=>{
    const res = await axios({
        method:"GET",
        url: BASEURL + '/static/static',
    })
    return res
}