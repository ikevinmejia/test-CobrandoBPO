
import AppRoutes from "./Routes/AppRoutes"
import { Provider } from 'react-redux'
import store from "./redux/store.js"


function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </div>
  );
}

export default App;
