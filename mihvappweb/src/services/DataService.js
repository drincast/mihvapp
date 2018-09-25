import axios from 'axios';
let config = require('../configapp.json');

class DataService{
    getDataCV(){
        try {
            let url = config.urlHvAppApi;
            

            let response = undefined;

            //axios.get(`${url}dataCVPerson/`)

            return `${url}dataCVPerson/`;
        } catch (error) {
            console.log(error);
        }        
    }
}

export default DataService;