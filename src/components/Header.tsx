import React from 'react';
import { Link } from 'react-router-dom';
import { Inbox } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { Theme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-semibold text-text-primary">
              ATLAS
            </h1>
            
            {/* Module Selector */}
            <div className="flex items-center bg-bg-base rounded-lg p-1">
              <button
                onClick={() => handleThemeChange('horizon')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus-ring ${
                  theme === 'horizon'
                    ? 'bg-brand-navy text-white shadow-subtle'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Horizon
              </button>
              <button
                onClick={() => handleThemeChange('pulse')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus-ring ${
                  theme === 'pulse'
                    ? 'bg-brand-teal text-white shadow-subtle'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Pulse
              </button>
            </div>
          </div>

          {/* Inbox button */}
          <Link
            to="/inbox"
            className="flex items-center space-x-2 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-bg-base transition-colors focus-ring"
            style={{ 
              borderColor: `var(--primary)`,
              color: `var(--primary)`
            }}
          >
            <Inbox size={16} />
            <span className="text-sm font-medium">Inbox</span>
          </Link>
        </div>
      </div>
    </header>
  );
};