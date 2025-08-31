import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Navigation } from './Navigation';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};