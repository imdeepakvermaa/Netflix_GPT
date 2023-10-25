import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
function App() {
  return (
    <div className="bg-gray-700 shadow-2xl">
        
        <Provider store={appStore}>
          <Body/>
        </Provider>
    </div>
  );
} 

export default App;
