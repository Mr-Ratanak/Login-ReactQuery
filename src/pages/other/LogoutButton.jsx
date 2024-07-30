import React from 'react';
import Button from '../components/Button';
import { useLogout } from '../hooks/user';

function LogoutButton(props) {

  const logout = useLogout();

  return (
    <>
      { logout.isError ? <div>{mutation.error.message}</div> : null }
      <Button onClick={logout.mutate()} disabled={logout.isLoading}>Logout</Button>
    </>
  );
}

export default LogoutButton;