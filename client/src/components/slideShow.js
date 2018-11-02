import React, { Component } from "react";
// import React from "react";
import axios from "axios";
import renderHTML from "react-render-html";
import { Slide } from "react-slideshow-image";
import SandboxMaster from "./Sandbox/Sandbox";
import "./slideShow.css";

// const slideImages = [
//   "images/slide_2.jpg",
//   "images/slide_3.jpg",
//   "images/slide_4.jpg"
// ];

// "http://www.ballastmedia.com/wp-content/uploads/OrnamentBorders_Blue1.jpg"

const properties = {
  duration: 10000,
  transitionDuration: 5000,
  infinite: true,
  indicators: true,
  arrows: true
};

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThisId: null,
      isOpened: true,

      // flase made index 0 (navbar) not work!
      code: "<h1>Choose a Snippet</h1>",
      slides: [
        {
          title: "NavBar",
          description:
            "A Navbar may incorrectly remind you of a subtle fall breeze, if this is the case, cool it!",
          snippet: `<div><ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul></div>
      <style>
        body {
            font-size: 28px;
        }
        
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
        }
        
        li {
            float: left;
        }
        
        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        
        li a:hover {
            background-color: #111;
        }
        
        .active {
            background-color: #4CAF50;
        }
        </style>`
        },
        {
          title: "Sidebar",
          description:
            "A Sidebar is like a Navbar, except one of the two is more like molten lava! So, it's best to have someone else try it first!",
          snippet: `<html><div class="wrapper">
          <!-- Sidebar -->
          <nav id="sidebar">
              <div class="sidebar-header">
                  <h3>Bootstrap Sidebar</h3>
              </div>
      
              <ul class="list-unstyled components">
                  <p>Dummy Heading</p>
                  <li class="active">
                      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                      <ul class="collapse list-unstyled" id="homeSubmenu">
                          <li>
                              <a href="#">Home 1</a>
                          </li>
                          <li>
                              <a href="#">Home 2</a>
                          </li>
                          <li>
                              <a href="#">Home 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                      <ul class="collapse list-unstyled" id="pageSubmenu">
                          <li>
                              <a href="#">Page 1</a>
                          </li>
                          <li>
                              <a href="#">Page 2</a>
                          </li>
                          <li>
                              <a href="#">Page 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Portfolio</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
          </nav>
      
      </div></html>`
        },
        {
          title: "Jumbotron",
          description:
            "A Jumbotron is just like the the fragrance 'Essence of Life' only it's more rectangular and pertains to coding!",
          snippet: `<html><div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div><html>`
        },
        {
          title: "BackgroundImage",
          description:
            "If a Background Image, to you, can sometimes feel like your being peppered with salt-water taffy, stop comparing things immediately!",
          snippet: `<html><style>.background-image {
            background-image: url('../../public/Picture.jpg'); /* The image used */
            opacity:.5;
            background-color: #cccccc; /* Used if the image is unavailable */
            height: 500px; /* You must set a specified height */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Do not repeat the image */
            background-size: cover; /* Resize the background image to cover the entire container */
          }</style><html>`
        }
      ],
      showCode: false
    };
    this.hideWrapper = this.hideWrapper.bind(this);
  }

  hideWrapper = event => {
    // check if box is currently opened
    const { isOpened } = this.state;
    this.setState({
      // toggle value of `isOpened`
      isOpened: !isOpened
    });
  };

  saveSnippet = index => {
    console.log(this.state.slides[index].snippet);

    axios
      .post("/api/snippet", {
        title: this.state.slides[index].title,
        snippet: this.state.slides[index].snippet
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  removeSnippet = _id => {
    // console.log(this.state.slides[index].snippet);

    axios
      // .delete("/api/snippet/:snippetId")
      .delete("/api/snippet/:" + _id)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  findAll = event => {
    axios
      .get("/api/snippet")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  onClick(index) {
    this.setState({
      showThisId: index,
      code: this.state.slides[index].snippet
    });
  }
  changeLings() {
    let jsxArray = [];
    jsxArray.push(this.state.code);
  }

  render() {
    // render() {
    return (
      <div>
        <Slide {...properties}>
          {this.state.slides.map((slide, index) => (
            <div
              className="each-slide"
              style={{ textAlign: "center", margin: "20px" }}
              key={index}
            >
              {/* <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>{slide.title}</span>
              </div> */}
              <div>{slide.description}</div>
              <div>
                <button onClick={() => this.onClick(index)}>
                  View Example
                </button>
                <button onClick={() => this.findAll}> Show All Saved </button>
                <button onClick={() => this.saveSnippet(index)}> Save </button>
                <button onClick={() => this.removeSnippet(index)}>
                  {(this.state.code = "")}
                  Remove
                </button>
              </div>
              {this.state.showCode && <div>{slide.snippet}</div>}
            </div>
          ))}
        </Slide>
        <div />
        <div className="container">
          {this.state.showThisId != null
            ? renderHTML(this.state.slides[this.state.showThisId].snippet)
            : this.removeSnippet
              ? renderHTML("")
              : ""}
        </div>
        <SandboxMaster code={this.changeLings} />
        {/* code={this.state.code}  */}
      </div>
    );
  }
}

export default Slideshow;
