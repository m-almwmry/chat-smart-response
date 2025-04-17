
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3b210d64856b4bada710481acfe5e7ea',
  appName: 'chat-smart-response',
  webDir: 'dist',
  server: {
    url: 'https://3b210d64-856b-4bad-a710-481acfe5e7ea.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#9b87f5",
    },
  }
};

export default config;
