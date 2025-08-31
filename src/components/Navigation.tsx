import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Landmark, 
  Calculator, 
  TrendingUp, 
  Settings,
  DollarSign,
  Receipt,
  PiggyBank
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
}

const horizonTabs: NavItem[] = [
  { path: '/panel', label: 'Panel', icon: Home },
  { path: '/inmuebles', label: 'Inmuebles', icon: Building },
  { path: '/tesoreria', label: 'Tesorería', icon: Landmark },
  { path: '/fiscalidad', label: 'Fiscalidad', icon: Calculator },
  { path: '/proyeccion', label: 'Proyección', icon: TrendingUp },
  { path: '/configuracion', label: 'Configuración', icon: Settings },
];

const pulseTabs: NavItem[] = [
  { path: '/panel', label: 'Panel', icon: Home },
  { path: '/ingresos', label: 'Ingresos', icon: DollarSign },
  { path: '/gastos', label: 'Gastos', icon: Receipt },
  { path: '/tesoreria-personal', label: 'Tesorería Personal', icon: PiggyBank },
  { path: '/proyeccion-personal', label: 'Proyección Personal', icon: TrendingUp },
  { path: '/configuracion', label: 'Configuración', icon: Settings },
];

export const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const tabs = theme === 'horizon' ? horizonTabs : pulseTabs;

  return (
    <nav className="bg-surface border-b border-border">
      <div className="max-w-full px-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-4 text-sm font-medium border-b-2 transition-colors focus-ring ${
                    isActive
                      ? 'border-current text-current'
                      : 'border-transparent text-text-secondary hover:text-text-primary'
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { color: 'var(--primary)', borderColor: 'var(--primary)' } : {}
                }
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};