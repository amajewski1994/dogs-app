import React, { Suspense } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './shared/LoadingSpinner';

const HomePage = React.lazy(() => import('./components/HomePage'));
const Navigation = React.lazy(() => import('./components/Navigation'));
const Footer = React.lazy(() => import('./components/Footer'));
const Store = React.lazy(() => import('./components/Store/Store'));
const SingleItem = React.lazy(() => import('./components/Store/SingleItem'));
const Cart = React.lazy(() => import('./components/Store/Cart'));
const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));
const Breeds = React.lazy(() => import('./components/Breeds/Breeds'));
const SingleBreed = React.lazy(() => import('./components/Breeds/SingleBreed'));
const Admin = React.lazy(() => import('./components/Admin/Admin'));

// import HomePage from './components/HomePage';
// import Store from './components/Store/Store';
// import SingleItem from './components/Store/SingleItem';
// import Cart from './components/Store/Cart';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery/Gallery';
// import Breeds from './components/Breeds/Breeds';
// import SingleBreed from './components/Breeds/SingleBreed';
// import Admin from './components/Admin/Admin';


library.add(fas, far, faFacebook, faInstagram, faTwitter, faFontAwesome)

function App() {

  let routes
  routes = (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/store" element={<Store />}></Route>
      <Route path="/store/:iid" element={<SingleItem />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/breeds" element={<Breeds />}></Route>
      <Route path="/breeds/:bid" element={<SingleBreed />}></Route>
    </Routes>
  );

  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className='body'>
          <Suspense
          fallback={<div className='center fallback'><LoadingSpinner asOverlay={true} /></div>}
          >
          {routes}
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
