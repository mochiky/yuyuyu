import React, { Component } from 'react';
import '../App.css';
import OCEDetails from './OnComingEventDetails';

class OnComingEvent extends Component {
    render() {
        return (
            <div class="container" style={{margin: "auto", align:"center"}}>
                <OCEDetails nama={this.props.nama}/>
            </div>
        )}
}


export default OnComingEvent;