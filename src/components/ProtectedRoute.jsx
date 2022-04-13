import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const loggedIn = localStorage.getItem('loggedIn');
  if (parseInt(loggedIn, 10) === 1) return <Outlet />;
  return <Navigate to="/login" />;
}
