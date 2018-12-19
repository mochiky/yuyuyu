import React, { Component } from 'react';
import '../App.css';
import CrystalWidjaja from "../CrystalWidjaja.jpg";
import JoinButton from './ButtonJoinUs';


class RowProfile extends Component {
    render() {
        return (
            <div class="container" style={{marginTop: "10px", align:"center"}}>
                <div class="row bg-primary ">
                    <div class="col-sm-3">
                        <div class="card" style={{width:"190px",height:"210px", marginTop:"20px"}}>
                            <img class="img-rounded" alt="Cinque Terre" display="block" width="100%" height="208px" src={CrystalWidjaja}/>
                        </div>
                    </div> 
                    <div class="col-md-6 text-white">
                            <h1 style={{fontSize:"30px", textAlign:"left",marginTop:"20px", marginLeft:"7px"}}>CRYSTAL WIDJAJA FANS CLUB</h1>
                            <h4 style={{fontSize:"20px", textAlign:"left",margin:"10px"}}>Location &nbsp;            Jakarta, Indonesia <br/></h4>
                            <h4 style={{fontSize:"20px", textAlign:"left",margin:"10px"}}>Members &nbsp;             1,078 <br/></h4>
                            <h4 style={{fontSize:"20px", textAlign:"left",margin:"10px"}}>Organizers &nbsp;          Adhi Wiranata <br/></h4> 
                            <br/>
                            <JoinButton align="left"/>
                            <br/>
                            <br/>
                    </div>
                    
                </div>
            </div>
        )}
}


export default RowProfile;