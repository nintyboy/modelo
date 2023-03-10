import {AnalyticsProvider, useInitAnalytics} from 'reactfire';
import { isBrowser } from 'app/hooks/is-browser';
import { useAnalyticsTracking } from 'app/hooks/use-analytics-tracking';

function FirebaseAnalyticsProvider({children}: React.PropsWithChildren){
   if ( !isBrowser()) {
     return <>{children}</>
   }

   return (
     <BrowserFirebaseAnalyticsProvider>
       {children}
     </BrowserFirebaseAnalyticsProvider>
   )

}

function BrowserFirebaseAnalyticsProvider(props: React.PropsWithChildren){
  const {data: sdk, status} = useInitAnalytics(async (app) =>{
    const {getAnalytics} = await import('firebase/analytics'); 
    return getAnalytics(app);
  }); 

  if(status !== 'success'){
    return <>{props.children}</>
  }

  return (
    <AnalyticsProvider sdk={sdk}>
      <AnalyticsTrackingEventsProvider>
        {props.children}
      </AnalyticsTrackingEventsProvider>
    </AnalyticsProvider>
  )

}

function AnalyticsTrackingEventsProvider({
  children,
}: React.PropsWithChildren) {
  useAnalyticsTracking()

  return <>{children}</>
}


export {FirebaseAnalyticsProvider}