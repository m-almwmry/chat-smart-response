
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Car, 
  Clock, 
  MessageCircle, 
  Plus, 
  Settings, 
  Trash2, 
  Edit
} from 'lucide-react';

// Mock data for demo
const mockAutoReplies = [
  {
    id: 1,
    triggers: ['hello', 'hi', 'hey'],
    response: "Thanks for your message! I'll get back to you as soon as possible.",
    apps: ['whatsapp', 'telegram'],
    type: 'both',
    active: true
  },
  {
    id: 2,
    triggers: ['meeting', 'appointment'],
    response: 'I am in a meeting right now. Will contact you later.',
    apps: ['whatsapp'],
    type: 'private',
    active: true
  }
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [serviceActive, setServiceActive] = useState(true);
  const [drivingMode, setDrivingMode] = useState(false);
  const [busyMode, setBusyMode] = useState(false);
  const [autoReplies, setAutoReplies] = useState(mockAutoReplies);

  const toggleAutoReplyActive = (id: number) => {
    setAutoReplies(autoReplies.map(reply => 
      reply.id === id ? { ...reply, active: !reply.active } : reply
    ));
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Service Status */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>{t('home.serviceStatus')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span>{serviceActive ? t('home.serviceActive') : t('home.serviceInactive')}</span>
                <span className="text-sm text-muted-foreground">
                  {serviceActive ? 'Auto-replies are working' : 'Auto-replies paused'}
                </span>
              </div>
              <Switch 
                checked={serviceActive} 
                onCheckedChange={setServiceActive} 
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Mode Toggles */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-sky-50">
            <CardContent className="p-4">
              <div className="flex flex-col items-center gap-2">
                <Car className="h-6 w-6 text-sky-600" />
                <h3 className="font-medium">{t('home.drivingMode')}</h3>
                <Switch 
                  checked={drivingMode} 
                  onCheckedChange={setDrivingMode} 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50">
            <CardContent className="p-4">
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                <h3 className="font-medium">{t('home.busyMode')}</h3>
                <Switch 
                  checked={busyMode} 
                  onCheckedChange={setBusyMode} 
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Auto Replies */}
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle>{t('home.activeReplies')}</CardTitle>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              {t('addReply.title')}
            </Button>
          </CardHeader>
          <CardContent>
            {autoReplies.length > 0 ? (
              <div className="flex flex-col gap-3">
                {autoReplies.map((reply) => (
                  <div key={reply.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {reply.triggers.map((trigger, i) => (
                          <Badge key={i} variant="secondary" className="font-normal">
                            {trigger}
                          </Badge>
                        ))}
                      </div>
                      <Switch 
                        className="scale-90"
                        checked={reply.active} 
                        onCheckedChange={() => toggleAutoReplyActive(reply.id)} 
                      />
                    </div>
                    <p className="text-sm mb-2">{reply.response}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {reply.apps.map((app, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs">
                          {reply.type}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center py-8 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">{t('home.noReplies')}</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  {t('home.addFirstReply')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>{t('home.stats')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>{t('home.repliesSent')}</span>
                <span className="text-sm text-muted-foreground">Last 7 days</span>
              </div>
              <span className="text-2xl font-bold">24</span>
            </div>
            {/* We could add charts or more detailed stats here */}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
