import React from "react";
import axios from "axios";

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      tidakloading: true,
    };
  }
  
  componentDidMount() {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        this.setState({ 
            people: response.data.results,
            tidakloading: false,
        })
      });
  }

  render() {
    const { people, tidakloading } = this.state
    if(tidakloading){
        return (
            <div>
                <img src="https://thumbs.gfycat.com/SelfishGracefulAmethystsunbird-size_restricted.gif"/>
            </div> 
        )
    }
    let filter1 = this.state.people.filter(res => res.height >= 150 && res.height <= 170 && res.hair_color !== "n/a" && res.hair_color !== "none")
    return (
      <div>
        <h1>Fetching data...</h1>
        <ul>{filter1.map(p => <li>{p.name} {p.height} cm  {p.hair_color}</li>)}</ul>
      </div>
    );
  }
}

export default FetchData;