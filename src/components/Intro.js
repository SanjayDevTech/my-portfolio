import React from 'react';

class Intro extends React.Component {
    render() {
        return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 Align-center">
            <div className="row">
              <img className="Profile" alt="Profile" src="https://en.gravatar.com/userimage/138806607/d6fbfb4048a09eb0f873c8a0cc6b9bfc.png?size=200"/>
            </div>
            <div className="row">
              <h3><a className="App-link" href="https://github.com/SanjayDevTech">Sanjay Developer</a></h3>
            </div>
          </div>
          <div className="col-md-6">
           <div className="row Description">
            <h6>
              I'm currently pursuing Bachelor of CS<br/>
              I ❤️ to code<br/>
              Android Developer | Web Developer<br/>
            </h6>
           </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Intro;