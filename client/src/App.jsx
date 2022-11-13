import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Views/Menu/Header';
import LandingPage from './Views/Pages/Landing/LandingPage';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import Footer from './Views/Menu/Footer';
import DummyData from './Dummy/DummyData'

function App() {
  const [mainDummy, setMainDummy] = useState([])

  useEffect(() => {
    const filtered = DummyData.filter((el) => el.mainurl)
    setMainDummy(filtered)
  }, [])
  
  return (
    <React.Fragment>
      <Header mainDummy={mainDummy}></Header>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/local" component={LocalPage}></Route>
        <Route path="/post/:id" component={PostPage} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
