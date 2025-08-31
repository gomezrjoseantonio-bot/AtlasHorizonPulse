import React from 'react';
import { Page } from '../components/Page';
import { Inbox as InboxIcon, Upload } from 'lucide-react';

export const Inbox: React.FC = () => {
  return (
    <Page 
      title="Inbox" 
      subtitle="Ingesta de documentos y movimientos"
    >
      <div className="max-w-2xl mx-auto">
        {/* Upload area */}
        <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
          <div className="w-16 h-16 bg-bg-base rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload size={32} className="text-text-muted" />
          </div>
          <h3 className="text-lg font-medium text-text-primary mb-2">
            Sube tus documentos
          </h3>
          <p className="text-text-secondary mb-6">
            Arrastra archivos aquí o haz clic para seleccionar
          </p>
          <button 
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-colors focus-ring"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <Upload size={20} />
            <span>Seleccionar archivos</span>
          </button>
        </div>

        {/* Empty state */}
        <div className="mt-8 text-center">
          <InboxIcon size={48} className="text-text-muted mx-auto mb-4" />
          <p className="text-text-secondary">
            No hay documentos procesados aún
          </p>
        </div>
      </div>
    </Page>
  );
};