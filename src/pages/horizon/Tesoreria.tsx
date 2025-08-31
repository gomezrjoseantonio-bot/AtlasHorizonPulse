import React, { useState } from 'react';
import { Page } from '../../components/Page';
import { Radar, Activity, Settings, AlertTriangle } from 'lucide-react';

const subtabs = [
  { id: 'radar', label: 'Radar', icon: Radar },
  { id: 'movimientos', label: 'Movimientos', icon: Activity },
  { id: 'reglas-sweeps', label: 'Reglas & Sweeps', icon: Settings },
  { id: 'alertas', label: 'Alertas', icon: AlertTriangle },
];

export const Tesoreria: React.FC = () => {
  const [activeTab, setActiveTab] = useState('radar');

  return (
    <Page 
      title="Tesorería" 
      subtitle="Gestión de liquidez y movimientos bancarios"
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
        {subtabs.find(tab => tab.id === activeTab) && (
          <>
            {React.createElement(subtabs.find(tab => tab.id === activeTab)!.icon, { 
              size: 48, 
              className: 'text-text-muted mx-auto mb-4' 
            })}
            <h3 className="text-lg font-medium text-text-primary mb-2">
              {subtabs.find(tab => tab.id === activeTab)?.label}
            </h3>
            <p className="text-text-secondary">
              Contenido específico para {subtabs.find(tab => tab.id === activeTab)?.label.toLowerCase()}
            </p>
          </>
        )}
      </div>
    </Page>
  );
};