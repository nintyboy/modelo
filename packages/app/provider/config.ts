import Constants from 'expo-constants'

type firebaseConfig = {
  apiKey: string | undefined
  authDomain: string | undefined
  projectId: string | undefined
  storageBucket: string | undefined
  messagingSenderId: string | undefined
  appId: string | undefined
  measurementId: string | undefined
}

type Config = {
  firebase: firebaseConfig
  environment: string | undefined
  emulatorHost: string | undefined
  emulator: boolean
  production: boolean
}

const config: Config = {
  firebase: {
    apiKey: Constants.manifest?.extra?.firebase?.apiKey
      ? Constants.manifest?.extra?.firebase?.apiKey
      : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: Constants.manifest?.extra?.firebase?.authDomain
      ? Constants.manifest?.extra?.firebase?.authDomain
      : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: Constants.manifest?.extra?.firebase?.projectId
      ? Constants.manifest?.extra?.firebase?.projectId
      : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: Constants.manifest?.extra?.firebase?.storageBucket
      ? Constants.manifest?.extra?.firebase?.storageBucket
      : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Constants.manifest?.extra?.firebase?.messagingSenderId
      ? Constants.manifest?.extra?.firebase?.messagingSenderId
      : process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: Constants.manifest?.extra?.firebase?.appId
      ? Constants.manifest?.extra?.firebase?.appId
      : process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: Constants.manifest?.extra?.firebase?.measurementId
      ? Constants.manifest?.extra?.firebase?.measurementId
      : process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  environment:
    (Constants.manifest?.extra?.environment ||
      process.env.NEXT_PUBLIC_VERCEL_ENV) ??
    'development',
  emulatorHost: process.env.NEXT_PUBLIC_EMULATOR_HOST,
  emulator:
    (Constants.manifest?.extra?.emulator ||
      process.env.NEXT_PUBLIC_EMULATOR) === 'true',
  production: process.env.NODE_ENV === 'production',
}
export default config
