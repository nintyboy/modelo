import {MutableRefObject, useRef} from 'react'
import { LinkingOptions, NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useMemo } from 'react'
import analytics from  '@react-native-firebase/analytics'
import { Platform } from 'react-native'
import { linking } from 'app/provider/navigation/linking'


function useLinkingConfig(
  trackedLinking: React.MutableRefObject<LinkingOptions<ReactNavigation.RootParamList>>
){
  return {
    linking: trackedLinking.current,
    onReady: useMemo(
      () =>
      Platform.select({
        web: () => {
          trackedLinking.current.enabled = false;
        },
      }),
      [trackedLinking]
    )
  }
}

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
 const routeNameRef = useRef() as MutableRefObject<string | undefined>;
 const trackedLinking = useRef(linking)
 const linkingConfig = useLinkingConfig(trackedLinking)
 const navigationRef = useNavigationContainerRef();


  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linkingConfig.linking}
      onReady={ ()=> {
         linkingConfig.onReady
         routeNameRef.current = navigationRef.getCurrentRoute()?.name; 
        }}
      onStateChange={async ()=>{
        const prevRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        if(prevRouteName !== currentRouteName){
          console.log("screen_name: ", currentRouteName)
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName
          })
        }
      }}
    >
      {children}
    </NavigationContainer>
  )
}
