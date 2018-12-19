import React, { Component } from 'react';
import '../App.css';
import CrystalWidjaja from "../CrystalWidjaja.jpg";


class MemberDetail extends Component {
    render() {
        return (
            <div class="container" style={{paddingBottom:"10px", marginTop: "10px", align:"center"}}>
                <div class="row bg-primary ">
                    <div class="col-1">
                        <div class="image" style={{align:"left", paddingTop:"10px", paddingBottom:"10px", marginLeft:"20px"}}>
                        <img class="rounded-circle" display="block" width="70px" height="70px" src={CrystalWidjaja} style={{opacity:"0.8"}}/>
                        </div>
                    </div>
                    <div class="col-6">
                        <h4 style={{color:"white", textAlign:"left", marginTop:"10px", marginLeft:"20px"}}>Organizers</h4>
                        <p style={{color:"white", textAlign:"left", marginLeft:"20px"}}> Adhy Wiranata&nbsp;    &nbsp;     &nbsp;   4 others.</p>
                    </div>
                </div>
            </div>
                        

        )

    }
} 




export default MemberDetail;