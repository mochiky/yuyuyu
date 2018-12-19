import React, { Component } from 'react';
import '../App.css';


class Mynavbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand text-muted" href="#">Qtemu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-muted" href="#">Create meetup <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-muted" href="#">Explore</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-muted" href="#">Popular groups</a>
            </li>
          </ul>
          <span class="navbar-text">
            <a class="nav-link text-muted" href="#">Login</a>
          </span>
        </div>
      </nav>
        
        )
    }

}

export default Mynavbar;
