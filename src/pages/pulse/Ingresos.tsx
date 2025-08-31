import React from 'react';
import { Page } from '../../components/Page';
import { DollarSign } from 'lucide-react';

export const Ingresos: React.FC = () => {
  return (
    <Page 
      title="Ingresos" 
      subtitle="Gestión de ingresos personales"
    >
      <div className="text-center py-12">
        <DollarSign size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Ingresos
        </h3>
        <p className="text-text-secondary">
          Contenido específico para ingresos
        </p>
      </div>
    </Page>
  );
};