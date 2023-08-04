
import axios from 'axios';
import { URL } from '../env';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(URL + '/api/users');
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with an error status code
            const { data, status } = error.response;
            throw new Error(data.message || `Failed to fetch users (Status: ${status})`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('No response received while fetching users');
        } else {
            // Something happened in setting up the request that triggered an error
            throw new Error('Error fetching users:', error.message);
        }
    }
};
