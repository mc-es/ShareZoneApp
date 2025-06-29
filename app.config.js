export default {
  owner: 'mc-es',
  name: 'ShareZoneApp',
  slug: 'ShareZoneApp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/app-icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.mces.sharezoneapp',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.mces.sharezoneapp',
    softwareKeyboardLayoutMode: 'pan',
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: ['expo-localization', 'expo-image-picker'],
};
