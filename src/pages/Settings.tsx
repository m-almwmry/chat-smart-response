
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Bell, Moon, Sun, CreditCard, Info, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <Layout title={t('settings.title')}>
      <div className="flex flex-col gap-6">
        {/* Language Setting */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t('settings.language')}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? t('settings.english') : t('settings.arabic')}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={language === 'en' ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setLanguage('en')}
                >
                  EN
                </Button>
                <Button 
                  variant={language === 'ar' ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setLanguage('ar')}
                >
                  عربي
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t('settings.notifications')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('general.enabled')}
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Theme */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t('settings.theme')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('settings.light')}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Moon className="h-4 w-4 mr-2" />
                {t('settings.dark')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upgrade */}
        <Card className="bg-gradient-to-r from-purple-100 to-indigo-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t('settings.upgrade')}</p>
                  <p className="text-sm text-muted-foreground">
                    Get access to premium features
                  </p>
                </div>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                Upgrade
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{t('settings.about')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('settings.version')}: 1.0.0
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
