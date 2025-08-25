import React from 'react';
import Navbar from './parking/components/Navbar'; // o donde esté tu Navbar
import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1140px]'>
          {children}
        </div>
      </div>
    </div>
  );
}