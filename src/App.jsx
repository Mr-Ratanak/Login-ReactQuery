import { useState } from 'react'
import './App.css'
import AppRoutes from './router'
import Login from './pages/login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './context/AuthContext';

const queryClient = new QueryClient();

const AuthenticatedApp = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Welcome, {user ? user.first_name +" "+ last_name : 'User'}</h1>
      <button onClick={logout}>Logout</button>
      <AppRoutes />
    </div>
  );
};

const UnauthenticatedApp = () => {
  return <Login />;
};


const App = () => {
  const { token } = useAuth();

  return token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

const RootApp = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);

export default RootApp
