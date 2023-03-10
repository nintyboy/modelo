/* eslint-disable import/no-anonymous-default-export */
// {
//   "expo": {
//     "name": "modelo",
//     "slug": "modelo",
//     "version": "1.0.0",
//     "scheme": "modelo",
//     "platforms": [
//       "ios",
//       "android"
//     ],
//     "ios": {
//       "bundleIdentifier": "io.andfriends.modelo",
//       "googleServicesFile": "../../packages/firebase/config/GoogleService-Info.plist"
//     },
//     "android": {
//       "package": "io.andfriends.modelo",
//       "googleServicesFile": "../../packages/firebase/config/google-services.json"
//     },
//     "extra": {
//       "eas": {
//         "projectId": "7e95f6d0-5145-4bba-aa65-e5e3d190cdcc"
//       }
//     },
//     "updates": {
//       "url": "https://u.expo.dev/7e95f6d0-5145-4bba-aa65-e5e3d190cdcc"
//     },
//     "plugins": [
//       "@react-native-firebase/app",
//         ["expo-build-properties",{
//         "ios":{
//           "useFrameworks": "static"
//         }
//       }]
//     ]
//   }
// }
import { ConfigContext, ExpoConfig } from '@expo/config'
import 'dotenv/config'
const {
  NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  NEXT_PUBLIC_VERCEL_ENV,
  NEXT_PUBLIC_EMULATOR_HOST,
  NEXT_PUBLIC_EMULATOR,
  NODE_ENV,
} = process.env

export default (context: ConfigContext): ExpoConfig => {
  const config: ExpoConfig = {
    name: 'modelo',
    slug: 'modelo',
    version: '1.0.0',
    platforms: ['ios', 'android'],
    ios: {
      bundleIdentifier: 'io.andfriends.modelo',
      googleServicesFile:
        '../../packages/firebase/config/GoogleService-Info.plist',
    },
    android: {
      package: 'io.andfriends.modelo',
      googleServicesFile: '../../packages/firebase/config/google-services.json',
    },
    scheme: 'modelo',
    extra: {
      firebase: {
        apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      },
      environment: NEXT_PUBLIC_VERCEL_ENV ?? 'development',
      emulatorHost: NEXT_PUBLIC_EMULATOR_HOST,
      emulator: NEXT_PUBLIC_EMULATOR === 'true',
      production: NODE_ENV === 'production',
    },
  }
  return config
}
