import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import "expo-dev-client"

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
