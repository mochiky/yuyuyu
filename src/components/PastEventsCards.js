
import React from 'react';
import '../App.css';
import CrystalWidjaja from "../CrystalWidjaja.jpg";
import NumberofAtt from "./NumberOfAttendant.js";



class CardEvents extends React.Component {
  render() {
    return (
      <div class="card-deck" style={{marginLeft:"55px", marginRight:"55px"}}>
        <div class="card">
          <img class="card-img-top" src={{CrystalWidjaja}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Grup temu kangen pemuja Ibu Club</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <NumberofAtt/>
            <button className="JoinUs__button">View</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={{CrystalWidjaja}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Klompencapir pemuja ibu club</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <NumberofAtt/>
            <button className="JoinUs__button">View</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={{CrystalWidjaja}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Event roadshow Jabar</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <NumberofAtt/>
            <button className="JoinUs__button">View</button>
          </div>
        </div>
</div>
    )
  }
}


export default CardEvents;