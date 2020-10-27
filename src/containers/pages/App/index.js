import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../../../components/molecules/navbar';
import BerlanggananPage from '../BerlanggananPage';
import HeroSectionPage from '../HeroSectionPage';
import RegisterPage from '../RegisterPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={HeroSectionPage}></Route>
          <Route path="/Berlangganan" component={BerlanggananPage}></Route>
          <Route path="/Login" component={LoginPage}></Route>
          <Route path="/Register" component={RegisterPage}></Route>
          <Route path="/Dashboard" component={DashboardPage}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
