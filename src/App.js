
import './App.css';
import {BrowserRouter,Route,Routes, useLocation} from "react-router-dom";
import NavBar from './component/navbar';
import AdoptPage from './component/adoptPage/adoptPage';
import DonatePage from './component/DonatePage/donatePage';
import AdoptDetails from './component/adoptPage/adoptDetail';
import Profile from './component/profilePage/profile';
import MyAnimalPage from './component/myAnimals/myAnimalPage';
import MyRescuePage from './component/myRescue/myRescuePage';
import Rehome from './component/rehome/rehome';
import Rescue from './component/rescuePage/rescue';
import Home from './component/homePage/home';
import Footer from './component/homePage/components/Footer';
import Signup from './component/signup';
import Signin from './component/signin';
import { Provider } from 'react-redux';
import { useLayoutEffect } from 'react';
import store from './redux/store';
import NotFoundPage from './component/notFoundPage';
import DonateDetails from './component/DonatePage/donateDetail';
import MyDonation from './component/myDonation/myDonation';
import PaymentSuccess from './component/paymentSuccess';
import PaymentCancel from './component/paymentCancel';
import GeoCoderMarker from './component/common/GeoCodeMarker';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <nav>
            <NavBar />
        </nav>
        <Routes>
            {["/", "/contact"].map(path => (
              <Route
                key={path}
                path={path}
                element={<Home />}
              />
            ))}
            {/* <Route path={["/", "/contact"]} element={<Home/>}/> */}
            <Route path="/adopt" element={<Provider store={store}><AdoptPage/></Provider>}/>
            <Route path="/donate" element={<Provider store={store}><DonatePage/></Provider>}/>
            <Route path="/animalDetail/:id" element={<Provider store={store}><AdoptDetails/></Provider>}/>
            <Route path="/injuedAnimalDetail/:id" element={<Provider store={store}><DonateDetails/></Provider>}/>
            <Route path="/profile" element={<Provider store={store}><Profile/></Provider>}/>
            <Route path="/myAnimal" element={<Provider store={store}><MyAnimalPage/></Provider>}/>
            <Route path="/myRescue" element={<Provider store={store}><MyRescuePage/></Provider>}/>
            <Route path="/rehome" element={<Provider store={store}><Rehome/></Provider>}/>
            <Route path="/rescue" element={<Provider store={store}><Rescue/></Provider>}/>
            <Route path="/signup" element={<Provider store={store}><Signup/></Provider>}/>
            <Route path="/signin" element={<Provider store={store}><Signin/></Provider>}/>
            <Route path="/mydonation" element={<MyDonation/>}/>
            <Route path='/success' element={<PaymentSuccess/>}/>
            <Route path='/cancel' element={<PaymentCancel/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes> 
        <footer>
            <Footer />
        </footer>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
