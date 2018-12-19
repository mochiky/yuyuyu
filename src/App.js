import React, { Component } from 'react';
import './App.css';
import Mynavbar from './components/Navbar.js';
import RowProfile from './components/RowProfile.js';
import OnComingEvent from './components/OnComingEvent.js';
import AboutEvent from './components/AboutEvent.js';
import MemberDetail from './components/Member.js';
import CardEvents from './components/PastEventsCards.js';
import Footer from './components/Footer.js'
import FetchData from './components/latihanFetch.js';
import axios from 'axios';



class App extends Component {
  constructor () {
    super ()
    this.state = {
      names: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(response => {
          this.setState({ 
              names: response.data.results,
          })
      });
  }
  
   
 
  render() {
    return (
      <div className="App">
        <Mynavbar/>
        <RowProfile/>
      <br/>
        <h4 style={{textAlign:"left", marginLeft:"65px", fontWeight:"bold"}}>Next Meetup</h4>
        <OnComingEvent nama={this.state.names}/>
      <br/>
        <h4 style={{textAlign:"left", marginLeft:"65px", fontWeight:"bold"}}>About the Event</h4>
        <AboutEvent/>
      <br/>
        <span class="SeeAll-text">
          <h4 style={{textAlign:"left", marginLeft:"65px", fontWeight:"bold"}}>Members</h4>
          <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
      <br/>
        <MemberDetail/>
      <br/>
        <span class="SeeAll-text">
          <h4 style={{textAlign:"left", marginLeft:"65px", fontWeight:"bold"}}>Past Events</h4>
          <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
      <br/>
        <CardEvents/>
      <br/>
      <br/>
      <br/>
      <hr size="344"/>
        <Footer/>
      </div>

       

      
    );
  }
}

export default App;
