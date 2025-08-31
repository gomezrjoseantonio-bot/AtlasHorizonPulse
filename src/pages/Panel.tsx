import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../components/Page';
import { useTheme } from '../contexts/ThemeContext';
import { Inbox } from 'lucide-react';

export const Panel: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Page 
      title="Panel" 
      subtitle={`Panel de control principal - ${theme === 'horizon' ? 'Horizon' : 'Pulse'}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Empty state with CTA to Inbox */}
        <div className="col-span-full">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-bg-base rounded-full flex items-center justify-center mx-auto mb-4">
              <Inbox size={32} className="text-text-muted" />
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">
              ¡Bienvenido a Atlas!
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Tu aplicación está vacía y lista para comenzar. Comienza subiendo documentos o 
              configurando tus datos.
            </p>
            <Link 
              to="/inbox"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-colors focus-ring"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <Inbox size={20} />
              <span>Ir a Inbox</span>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};