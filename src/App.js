import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from 'components'

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <div>Hellloooo</div>
        {/*<Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={AccountPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/account`} component={AccountPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/browse`}component={BrowserPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/billing`} component={BillingPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={AboutPage}/>
        </Switch>*/}
      </div>
    );
  }
}

export default App;
