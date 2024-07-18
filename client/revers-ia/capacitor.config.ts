import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'revers.ia',
  appName: 'revers-ia',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
