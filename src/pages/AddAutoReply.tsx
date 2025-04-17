
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useNavigate } from 'react-router-dom';

const AddAutoReply: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [triggers, setTriggers] = useState('');
  const [response, setResponse] = useState('');
  const [messageType, setMessageType] = useState('both');
  const [apps, setApps] = useState({
    whatsapp: true,
    telegram: false,
    messenger: false,
    instagram: false
  });

  const handleSave = () => {
    // Save logic would go here
    navigate('/');
  };

  return (
    <Layout title={t('addReply.title')} showBackButton>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="triggers">{t('addReply.triggerWords')}</Label>
                <Input
                  id="triggers"
                  placeholder={t('addReply.triggerWordsHint')}
                  value={triggers}
                  onChange={(e) => setTriggers(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="response">{t('addReply.responseMessage')}</Label>
                <Textarea
                  id="response"
                  placeholder={t('addReply.responseMessageHint')}
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  className="min-h-32"
                />
              </div>
              
              <div className="space-y-3">
                <Label>{t('addReply.appsToMonitor')}</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="whatsapp"
                      checked={apps.whatsapp}
                      onCheckedChange={(checked) => 
                        setApps({...apps, whatsapp: checked === true})
                      }
                    />
                    <Label htmlFor="whatsapp" className="font-normal">WhatsApp</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="telegram"
                      checked={apps.telegram}
                      onCheckedChange={(checked) => 
                        setApps({...apps, telegram: checked === true})
                      }
                    />
                    <Label htmlFor="telegram" className="font-normal">Telegram</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="messenger"
                      checked={apps.messenger}
                      onCheckedChange={(checked) => 
                        setApps({...apps, messenger: checked === true})
                      }
                    />
                    <Label htmlFor="messenger" className="font-normal">Messenger</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="instagram"
                      checked={apps.instagram}
                      onCheckedChange={(checked) => 
                        setApps({...apps, instagram: checked === true})
                      }
                    />
                    <Label htmlFor="instagram" className="font-normal">Instagram</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>{t('addReply.messageType')}</Label>
                <RadioGroup 
                  value={messageType} 
                  onValueChange={setMessageType}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="private" />
                    <Label htmlFor="private" className="font-normal">{t('addReply.private')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="group" id="group" />
                    <Label htmlFor="group" className="font-normal">{t('addReply.group')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-normal">{t('addReply.both')}</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  {t('addReply.cancel')}
                </Button>
                <Button onClick={handleSave}>
                  {t('addReply.save')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddAutoReply;
