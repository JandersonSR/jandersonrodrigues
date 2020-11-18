import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';


const Main = () => {
  return( 
  <Switch>
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
  );
}
export default Main;


{/* <Content>
<div className="page-content" />
<Main/>
</Content> */}