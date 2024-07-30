import { useQuery } from '@tanstack/react-query';
const axios = require('axios');

// api call
export function getUser() {
 return axios.get('/api/user');
};

// user query
export const useGetUser =() =>{
 // run the query
 return useQuery({
   queryKey: ['user'],
   queryFn: () => getUser(),
   staleTime: Infinity,
   cacheTime: Infinity,
 });
};