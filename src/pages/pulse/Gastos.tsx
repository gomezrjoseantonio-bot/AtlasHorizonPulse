import React from 'react';
import { Page } from '../../components/Page';
import { Receipt } from 'lucide-react';

export const Gastos: React.FC = () => {
  return (
    <Page 
      title="Gastos" 
      subtitle="Gestión de gastos personales"
    >
      <div className="text-center py-12">
        <Receipt size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Gastos
        </h3>
        <p className="text-text-secondary">
          Contenido específico para gastos
        </p>
      </div>
    </Page>
  );
};