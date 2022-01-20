import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';

export default function Error() {
  return (
    <MainLayout>
      <div className="container text-teal-900 mx-auto min-h-full flex flex-col justify-center items-center">
        <h1 className="mt-40 text-7xl font-semibold">404</h1>
        <h1 className="text-5xl font-semibold">Page Not Found</h1>
      </div>
    </MainLayout>
  );
}
