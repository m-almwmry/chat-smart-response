
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PlusCircle, 
  Settings, 
  Calendar, 
  Cloud, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, title, showBackButton = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { dir } = useLanguage();
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-cairo">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-card shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          {showBackButton ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              className="rtl-flip"
            >
              {dir === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          ) : (
            <div className="text-xl font-bold text-primary">{t('app.name')}</div>
          )}
          
          {title && <h1 className="text-xl font-medium">{title}</h1>}
          
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-auto container mx-auto p-4">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="border-t bg-card shadow-lg">
        <div className="container mx-auto flex justify-around items-center py-3">
          <NavItem icon={<Home />} label={t('nav.home')} path="/" />
          <NavItem icon={<PlusCircle />} label={t('nav.addReply')} path="/add" />
          <NavItem icon={<Calendar />} label={t('nav.schedule')} path="/schedule" />
          <NavItem icon={<Cloud />} label={t('nav.backup')} path="/backup" />
          <NavItem icon={<Settings />} label={t('nav.settings')} path="/settings" />
        </div>
      </nav>
    </div>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, path }) => {
  const navigate = useNavigate();
  const isActive = location.pathname === path;
  
  return (
    <Button
      variant="ghost"
      className={`flex flex-col items-center justify-center gap-1 p-1 ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`}
      onClick={() => navigate(path)}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
};
