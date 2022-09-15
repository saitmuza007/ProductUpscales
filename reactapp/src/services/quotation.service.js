import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { authHeader } from './base.service';


const API_URL = BASE_API_URL + '/api/quotation';

class QuoatationService {

    saveQuotation(quotation) {
        return axios.post(API_URL, quotation, {headers: authHeader()});
    }

    getAllQuotation() {
        return axios.get(API_URL,{headers: authHeader()});
    }
}

export default new QuoatationService();
