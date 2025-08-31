import React from 'react';
import { Page } from '../../components/Page';
import { TrendingUp } from 'lucide-react';

export const Proyeccion: React.FC = () => {
  return (
    <Page 
      title="Proyección" 
      subtitle="Inmuebles, Personal, Consolidado"
    >
      <div className="text-center py-12">
        <TrendingUp size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Proyección
        </h3>
        <p className="text-text-secondary">
          Contenido específico para proyecciones
        </p>
      </div>
    </Page>
  );
};