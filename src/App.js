import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from 'components'
import styled from 'styled-components'

const HomePage = styled.div`
height: 100vh;
`

const ConcertsPage = styled.div`
height: 100vh;
background-color: red;
`

const MembersPage = styled.div`
height: 100vh;
background-color: blue;
`

const AboutPage = styled.div`
height: 100vh;
background-color: green;
`

const MediaPage = styled.div`
height: 100vh;
background-color: purple;
`

const NewsPage = styled.div`
height: 100vh;
background-color: pink;
`

const FAQPage = styled.div`
height: 100vh;
background-color: yellow;
`

const ArchivesPage = styled.div`
height: 100vh;
background-color: orange;
`

const DonatePage = styled.div`
height: 100vh;
background-color: gray;
`

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <div>Hellloooo</div>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/concerts`} component={ConcertsPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/members`}component={MembersPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/about`}component={AboutPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/media`}component={MediaPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/news`}component={NewsPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/faq`}component={FAQPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/archives`}component={ArchivesPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/donate`}component={DonatePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
