
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';

const ScheduleReplies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('schedule.title')}>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">{t('schedule.noSchedules')}</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t('schedule.addSchedule')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ScheduleReplies;
