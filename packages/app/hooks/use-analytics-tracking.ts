import { useTrackScreenViews } from './use-track-screen-views';
import { useTrackSignedInUser } from './use-track-signed-in-user';

export function useAnalyticsTracking() {
  useTrackScreenViews();
  useTrackSignedInUser();
}
