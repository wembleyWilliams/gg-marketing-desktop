import "../common/types";
import axios from "axios";

const log = require('loglevel');
log.setDefaultLevel("INFO")

//TODO: Change URL to .env URL
// const url = process.env.REACT_SERVER_URL;
const url = "https://gg-database-server.herokuapp.com"
// const url = "http://localhost:7020"
const services = {
    //TODO: if business ID is null implement an error page
    getAuthentication: async () => {
        let result: any;
       
    },
    
    getBusiness: async () => {
        let params = new URLSearchParams(document.location.search.substring(1));
        let businessId = params.get("businessId");
        let result: any;
        result =
            axios.get(`${url}/find/business/${businessId}`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    log.error(err)
                })
        return result;
    },
    createBusiness: async () => {},
    updateBusiness: async (businessId: number) => {},
    deleteBusiness: async (businessId: number) => {}
}

export default services