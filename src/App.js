import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';



// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Signup from './components/signup'
import Dashboard from './components/dashbord'
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ImagePose from './components/ImagePose'
import Room from './Room'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    //childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    
        <AuthProvider>
          <ScrollReveal
            ref={childRef}
            children={() => (
              <Switch>
                <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
                <AppRoute exact path="/Signup" component={Signup} />
                <AppRoute exact path="/dashbord" component={Dashboard} />
                <AppRoute exact path="/imgpose" component={ImagePose} />
                <AppRoute exact path="/Login" component={Login} />
                <AppRoute exact path="/room" component={Room} />
              </Switch>
            )} />
        </AuthProvider>
      
  );
}

export default App;