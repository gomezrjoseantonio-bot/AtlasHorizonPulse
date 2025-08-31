import React from 'react';
import { Page } from '../components/Page';
import { Settings } from 'lucide-react';

export const Configuracion: React.FC = () => {
  return (
    <Page 
      title="Configuración" 
      subtitle="Bancos & Cuentas, Plan & Facturación, Usuarios & Roles, Preferencias & Datos"
    >
      <div className="text-center py-12">
        <Settings size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          Configuración
        </h3>
        <p className="text-text-secondary">
          Contenido específico para configuración
        </p>
      </div>
    </Page>
  );
};