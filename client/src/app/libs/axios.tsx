import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL_BASE,
  headers: {
    'Access-Control-Allow-Origin': false,
    origin: 'x-requested-with',
    'Access-Control-Allow-Headers':
      'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    'Content-Type': 'application/json',
  },
});

export default instance;
