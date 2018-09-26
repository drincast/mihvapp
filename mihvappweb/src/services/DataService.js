import axios from 'axios';
let config = require('../configapp.json');

class DataService{
    getDataCV(){
        try {
            let url = config.urlHvAppApi;
            let response = undefined;

            // axios({
            //     method: 'get',
            //     url: `${url}dataCVPerson/`,
            //     headers: {
            //         'Content-Type': 'application/json, text/plain, */*'
            //     },
            //     withCredentials: false,
            //     timeout: 5000
            // })
            // .then(resp => {
            //     console.log(resp.data);
            //     response = resp.data;                
            // })
            // .catch( err => {
            //     console.log(err);
            // });

            response = 'hola';

            return response;
        } catch (error) {
            console.log(error);
        }        
    }
}

export default DataService;