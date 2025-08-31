import React from 'react';

interface PageProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-text-primary mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};