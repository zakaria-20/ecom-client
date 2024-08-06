import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Element, role }) {
  return (
    <>
      {role === 'admin' ? <Element /> : <Navigate to="/" replace />}
    </>
  );
}

export default ProtectedRoute;
