import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'f.feats.app',
  appName: 'Feats',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
