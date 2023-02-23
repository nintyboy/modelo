import {AnalyticsProvider, useInitAnalytics} from 'reactfire';
import config from '../config'
import { useAnalyticsTracking } from 'app/hooks/use-analytics-tracking';

function FirebaseAnalyticsProvider({children}: React.PropsWithChildren){
  return <BrowserFirebaseAnalyticsProvider>{children}</BrowserFirebaseAnalyticsProvider>

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
      {props.children}
    </AnalyticsProvider>
  )

}


export {FirebaseAnalyticsProvider}