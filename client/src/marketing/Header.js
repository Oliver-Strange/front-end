import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  btnClicked = path => {
    this.props.history.push(`/${path}`);
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 500);
  };

  render() {
    return (
      <header className="landingHeader">
        <div className="head">
          <h1>Go Have Fun</h1>
          <div>
            <p>
              Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis
              nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus
              eros, pellentesque at rhoncus eu, maximus ut diam.
            </p>
            <button className="contact" onClick={() => this.btnClicked("main")}>
              FIND AN EVENT
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
