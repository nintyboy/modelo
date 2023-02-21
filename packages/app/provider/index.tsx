import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
   //TODO: Seperate A provider for Web and Mobile `index.web.tsx`
   //TODO: Set up a firebase package and initialise FB
   //TODO: Set up a configuration file with the FB Credentials attached to NEXT_ENV_{CREDNAME}
   //TODO: Add Local / Staging and Productions values
   //TODO: Test by enabling debugView
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  )
}
