import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Thumbnail extends Component {

    state = {
        image: this.props.image
    };

    handleMouseMove = () => {
        this.setState({
            image: this.props.image2
        });
    }
    handleMouseOut = () => {
        this.setState({
            image: this.props.image
        });
    }

    render() {
        return (
          <div className="project-thumbnail">
            <Link to={this.props.link}>
              <div className="project-image">
                <img src={this.state.image} onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
                alt="critterpedia"/>
              </div>

              <div className="project-title">
              <h5>{this.props.title}</h5>
                  <div className="project-category">
                      <p>{this.props.category[0]}</p>
                      <p>{this.props.category[1]}</p>
                  </div>
              <h6>{this.props.description}
              {this.props.icon !== "" ? <img id="icon" alt="" src={this.props.icon}/> : null}
              </h6>
              </div>
            </Link>
          </div>
        );
    }

}

export default Thumbnail;
