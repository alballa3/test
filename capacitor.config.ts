import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'gymrat.com',
  appName: 'Mygymbro tracker',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: false, // disable auto hide
      launchShowDuration: 0, // duration 0 means no splash screen
      backgroundColor: "#ffffff", // optional, to change background color if you leave splash screen enabled
      androidScaleType: "CENTER_CROP", // optional, adjust how splash screen scales
      iosSplashScreenMode: "fullscreen", // optional, for iOS
    }
  }
};

export default config;
