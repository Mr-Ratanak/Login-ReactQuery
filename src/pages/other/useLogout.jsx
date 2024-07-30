import { useQueryClient, useMutation } from '@tanstack/react-query';

// login mutation
export function useLogout() {
  // get the query client
  const queryClient = useQueryClient();
  // create the mutation
  return useMutation({
    mutationFn: () => {
      return axios.post('/api/user/logout');
    },
    onSuccess: () => {
      queryClient.setQueryData(['user'], false); 
    },
  })
};