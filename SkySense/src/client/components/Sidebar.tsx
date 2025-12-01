import { Wind, TrendingUp, BarChart3, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  activeNav?: string;
  onNavChange?: (id: string) => void;
}

export default function Sidebar({ activeNav = 'dashboard', onNavChange }: SidebarProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Wind className="w-5 h-5" />, path: '/' },
    { id: 'forecast', label: 'Forecast', icon: <TrendingUp className="w-5 h-5" />, path: '/' },
    { id: 'evaluation', label: 'Model Evaluation', icon: <BarChart3 className="w-5 h-5" />, path: '/' },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" />, path: '/reports' },
  ];

  const handleNavClick = (item: NavItem) => {
    onNavChange?.(item.id);
    navigate(item.path);
  };

  const isActive = (path: string, id: string) => {
    if (id === 'reports') return location.pathname === '/reports';
    return location.pathname === '/';
  };

  return (
    <aside className={`w-64 flex flex-col h-screen sticky top-0 border-r ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      {/* Logo */}
      <div className={`p-6 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Wind className="w-6 h-6 text-white" />
          </div>
          <span className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>SkySense</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
              isActive(item.path, item.id)
                ? 'bg-cyan-600 text-white'
                : theme === 'dark'
                ? 'text-slate-300 hover:bg-slate-800'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Air Quality Monitoring System</p>
      </div>
    </aside>
  );
}
