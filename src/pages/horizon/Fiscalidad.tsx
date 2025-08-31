import React from 'react';
import { Page } from '../../components/Page';
import { Calculator } from 'lucide-react';

export const Fiscalidad: React.FC = () => {
  return (
    <Page 
      title="Fiscalidad" 
      subtitle="Gestión fiscal e impuestos"
    >
      <div className="text-center py-12">
        <Calculator size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Fiscalidad
        </h3>
        <p className="text-text-secondary">
          Contenido específico para fiscalidad
        </p>
      </div>
    </Page>
  );
};