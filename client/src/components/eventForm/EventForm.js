import React, { Component } from "react";
import EventDetails from "./EventDetails";
import MoreDetails from "./MoreDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Footer from "../Footer";

export class EventForm extends Component {
  state = {
    step: 1,
    newEvent: {
      title: "",
      location: "",
      event_time: "",
      event_date: "",
      short_details: "",
      long_details: "",
      public_status: true,
      host_id: 1 // test, need to pass in host_id
    }
  };

  //Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go Back

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle Change
  handleChange = input => e => {
    this.setState({ newEvent: { ...this.state.newEvent, [input]: e.target.value } });
  };

  //Checkbox
  togglePublicStatus = () => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        public_status: !this.state.newEvent.public_status
      }
    });
  };

  render() {
    console.log(this.state.newEvent);
    const { step } = this.state;
    const {
      title,
      location,
      event_time,
      event_date,
      short_details,
      long_details,
      public_status,
      host_id
    } = this.state.newEvent;

    const values = {
      title,
      location,
      event_time,
      event_date,
      short_details,
      long_details,
      public_status,
      host_id
    };

    switch (step) {
      case 1:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <EventDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                setLocation={this.setLocation}
              />
              <Footer />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <MoreDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                togglePublicStatus={this.togglePublicStatus}
                values={values}
              />
              <Footer />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                newEvent={this.state.newEvent}
              />
              <Footer />
            </div>
          </>
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default EventForm;
