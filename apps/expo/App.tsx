import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider/app-providers'
import "expo-dev-client"

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
