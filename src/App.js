import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    // This will provide the store to every component of our application tree
    <Provider store = {store}>
    <div className="App">
      {/* <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
     <NewCakeContainer/> */}
     <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
