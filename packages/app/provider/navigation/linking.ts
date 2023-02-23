import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
const url = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [
    Linking.createURL('/'),
    `https://${url}/`,
    `https://*.${url}/`,
    // http, including subdomains like www.
    `http://${url}/`,
    `http://*.${url}/`,
  ],
  config: {
    //@ts-ignore
    initialRouteName: 'home',
    screens: {
      home: '',
      'user-detail': 'user/:id',
    },
  },
};

export { linking };
