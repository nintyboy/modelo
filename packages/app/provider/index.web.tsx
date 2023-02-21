import { Dripsy } from './dripsy'
import { FirebaseAppShell } from './firebase/FirebaseAppShell'
import { NavigationProvider } from './navigation'
import config from './config';
import { FirebaseAnalyticsProvider } from './firebase/FirebaseAnalyticsProvider.web';


export function Provider({ children }: { children: React.ReactNode }) {
  const {firebase} = config;
  console.log(process.env.NODE_ENV)
  return (
    //TODO: Seperate A provider for Web and Mobile `index.web.tsx`
    //TODO: Set up a firebase package and initialise FB
    //TODO: Set up a configuration file with the FB Credentials attached to NEXT_ENV_{CREDNAME}
    //TODO: Add Local / Staging and Productions values
    //TODO: Test by enabling debugView
    <FirebaseAppShell config={firebase}>
      <FirebaseAnalyticsProvider>
        <NavigationProvider>
          <>Web</>
          <Dripsy>{children}</Dripsy>
        </NavigationProvider>
      </FirebaseAnalyticsProvider>
    </FirebaseAppShell>
  );
}
