import React, { useState } from 'react';
import { Page } from '../../components/Page';
import { Building, FileText, TrendingUp, CreditCard, BarChart3 } from 'lucide-react';

const subtabs = [
  { id: 'cartera', label: 'Cartera', icon: Building },
  { id: 'contratos', label: 'Contratos', icon: FileText },
  { id: 'prestamos', label: 'Préstamos', icon: CreditCard },
  { id: 'gastos-docs', label: 'Gastos & Docs', icon: TrendingUp },
  { id: 'analisis', label: 'Análisis', icon: BarChart3 },
];

export const Inmuebles: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cartera');

  return (
    <Page 
      title="Inmuebles" 
      subtitle="Gestión de propiedades de inversión"
    >
      {/* Subtabs */}
      <div className="border-b border-border mb-6">
        <nav className="flex space-x-8">
          {subtabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors focus-ring ${
                  activeTab === tab.id
                    ? 'border-current text-current'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
                style={
                  activeTab === tab.id 
                    ? { color: 'var(--primary)', borderColor: 'var(--primary)' } 
                    : {}
                }
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="text-center py-12">
        <Building size={48} className="text-text-muted mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text-primary mb-2">
          {subtabs.find(tab => tab.id === activeTab)?.label}
        </h3>
        <p className="text-text-secondary">
          Contenido específico para {subtabs.find(tab => tab.id === activeTab)?.label.toLowerCase()}
        </p>
      </div>
    </Page>
  );
};