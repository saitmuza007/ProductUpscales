import { BASE_API_URL } from '../common/constants';
import axios from 'axios';


const BASE_URL = BASE_API_URL + '/api/authentication';

class AuthenticationService {

    login(user) {
        return axios.post(BASE_URL + '/sign-in', user);
    }

    register(user) {
        return axios.post(BASE_URL + '/sign-up', user);
    }
    getUsers()
    {
        return axios.get(BASE_URL);
    }
    deleteUser(userId)
    {
        return axios.delete(BASE_URL+'/'+userId);
    }
}


export default new AuthenticationService();
