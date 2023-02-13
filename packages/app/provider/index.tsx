import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    //TODO: Add Firebase Provider Here: 
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  )
}
