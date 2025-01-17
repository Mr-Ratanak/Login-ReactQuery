import { useQueryClient, useMutation } from '@tanstack/react-query';

// login mutation
export function useLogin() {
  // get the query client
  const queryClient = useQueryClient();
  // create the mutation
  return useMutation({
    mutationFn: (data) => {
      return axios.post('/api/user/login', data);
    },
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user); 
    },
  })
};