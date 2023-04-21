'use client';

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL_BASE,
  /*  headers: {
    authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || '')}`,
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
    'Access-Control-Allow-Headers':
      'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    'Content-Type': 'application/json',
  }, */
});

export default instance;
