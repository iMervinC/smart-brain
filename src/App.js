import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import particlesOption from './particle';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '1dc1eed6d78a4f0e8c8b9207a3be9224'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3cb4f13130023.562a7e7921b4f.jpg',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3cb4f13130023.562a7e7921b4f.jpg',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
      name: '',
      email: '',
      entries: 0,
      joined: new Date()
      }
    }
  }
  
  loadUser = (data) => {
    this.setState( {user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
          }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return  {
      leftCol:clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol:width - (clarifaiFace.right_col * width),
      bottomRow: height- (clarifaiFace.bottom_row * height)
    }
    }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click');
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, box, imageUrl, route} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOption[1]}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home' 
          ?<div>
            <Logo />
              <Rank />
              <ImageLinkForm 
               onInputChange={this.onInputChange} 
               onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange}/> 
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>) 
        }
        </div>
    );
  }
}

export default App;
