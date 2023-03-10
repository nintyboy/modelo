import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { Provider as MobXProvider } from 'mobx-react'
import observableStore from 'app/stores/test-store'
import { FirebaseAppShell } from './firebase/FirebaseAppShell'
import config from './config'
import { FirebaseAnalyticsProvider } from './firebase/FirebaseAnalyticsProvider'


export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseAppShell config={config.firebase}>
      <FirebaseAnalyticsProvider>
        <NavigationProvider>
          {
            // TODO: Add appcontainer = https://itnext.io/easily-integrate-mobx-into-react-native-app-with-expo-and-react-navigation-29ecf7c14012
          }
          <Dripsy>{children}</Dripsy>
        </NavigationProvider>
      </FirebaseAnalyticsProvider>
    </FirebaseAppShell>
  )
}
