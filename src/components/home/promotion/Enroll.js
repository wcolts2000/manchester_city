import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { firebasePromotions } from "../../../firebase";
import FormField from "../../ui/formFeilds";
import { validate } from "../../ui/misc";

export default class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter you email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormData = { ...this.state.formdata };
    const newElement = { ...newFormData[element.id] };

    newElement.value = element.e.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  resetFormSuccess(type) {
    const newFormData = { ...this.state.formdata };
    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formdata: newFormData,
      formSuccess: type ? "Congratulations" : "Already in the database"
    });
    this.clearSuccessMessage();
  }

  clearSuccessMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
  }

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
      //this.resetFormSuccess();
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id="email"
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  Something is wrong, try again...
                </div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={e => this.submitForm(e)}>Enroll</button>
              <div className="enroll_discl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis distinctio odio quas autem! Quis placeat ratione repudiandae iste ut, optio non. Omnis quaerat quas asperiores voluptatum, rem ea maxime?</div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
