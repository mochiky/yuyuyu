import React, { Component } from 'react';
import '../App.css';



class OCEDetails extends Component {
    render() {
        return (
            <div class="row bg-primary ">
                <div class="col text-white">
                    <h4 style={{marginTop:"10px"}} align="left">Pertemuan kita selanjutnya (Secret)</h4>
                    <p align="left" style={{color:"grey", fontWeight:"bold"}}>25 Desember 2018</p>
                    <p align="justify" style={{fontWeight:"bold", marginLeft:"10px", marginRight:"10px"}}>
                        Halo, para pemuja CW (Crystal Widjaja)!
                        Jangan sampe kelewatan ya pertemuan rahasia bulanan kita dengan agenda memberi apresiasi kepada ibu klub kita Crystal Widjaja.
                        Tempat dan waktu akan dikabarkan seminggu sebelum hari H, karena tempat terbatas mohon RSVP.
                        <br/>
                        --- Jangan lupa membawa Glow stick dan poto2 ibu klub untuk saling share ya.---
                        <br/>
                        <br/>
                        Sampai jumpa!
                        
                        <br/>
                        <br/>
                        Hail Ibu Club
                        <br/>
                        <p>           
                        {
                            this.props.nama.map(namaOrang => {
                                return (namaOrang.name +", "
                                )
                            })
                        }
                        </p>
                    </p>

                </div>
            </div> 
            )
        }
}       


export default OCEDetails;