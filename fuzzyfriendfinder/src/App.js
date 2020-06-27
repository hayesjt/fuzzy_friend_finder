import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from "./components/layout/Navbar";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";
import { About } from "./components/about_us/Aboutus";
import { Veterinary } from './components/services/Veterinary';
import { Obedience } from './components/services/Obedience';
import { Grooming } from './components/services/Grooming';
import { Support } from './components/services/Support';
import { Surrender } from './components/services/Surrender';
import { EndOfLife } from './components/services/EndOfLife';
import { Foster } from './components/fuzzy_friends/Foster';
import { AdoptableAnimals } from './components/fuzzy_friends/AdoptableAnimals';
import { SuccessfulAdoptions } from './components/fuzzy_friends/SuccessfulAdoptions';
import { RainbowBridge } from './components/fuzzy_friends/RainbowBridge';
import { Donate } from "./components/donate/Donate";
import { Catch } from "./components/layout/Catch";
import { Footer } from "./components/layout/Footer";



function App() {
  return (
    // React Container: used instead of a </div> tag
    <React.Fragment>

      {/* Nav Bar Component */}
      <Navigation />

      {/* Bootstrap Container that accepts children */}
      <Layout>

        <Router>
          <Switch>
            {/* Routes to all pages*/}
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/veterinaryservices" component={Veterinary} />
            <Route path="/obediencetraining" component={Obedience} />
            <Route path="/petgrooming" component={Grooming} />
            <Route path="/supportservices" component={Support} />
            <Route path="/surrenderservices" component={Surrender} />
            <Route path="/endoflifeservices" component={EndOfLife} />
            <Route path="/fosterneeds" component={Foster} />
            <Route path="/adoptableanimals" component={AdoptableAnimals} />
            <Route path="/successfuladoptions" component={SuccessfulAdoptions} />
            <Route path="/rainbowbridge" component={RainbowBridge} />
            <Route path="/donate" component={Donate} />
            <Route component={Catch} />

          </Switch>
        </Router>

      </Layout>

      {/* Footer Component */}
      <Footer />

    </React.Fragment>
  )
}

export default App;
