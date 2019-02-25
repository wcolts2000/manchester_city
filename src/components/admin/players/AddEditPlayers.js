import React, { Component } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import FormField from "../../ui/formFeilds";
import { validate } from "../../ui/misc";
// import { firebaseDB, firebasePlayers, firebase } from "../../../firebase";
import Fileuploader from '../../ui/Fileuploader';
export default class AddEditPlayers extends Component {
  state={
    playerId:'',
    formType: '',
    formError:false,
    formSuccess:'',
    defaultImg:'',
    formdata:{
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player Last Name",
          name: "lastname_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player Number",
          name: "number_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a position",
          name: "select_position",
          type: "select",
          options: [
            {key:'Keeper',value:'Keeper'},
            {key:'Defense',value:'Defense'},
            {key:'Midfield',value:'Midfield'},
            {key:'Striker',value:'Striker'}
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      image:{
        element:'image',
        value:'',
        validation: {
          required: true
        },
        valid: false
      }
    }
  }

  componentDidMount = () => {
    const playerId = this.props.match.params.id;

    if(!playerId){
      this.setState({
        formType: 'Add Player'
      })
    } else {
      //
    }
  }
  

  updateForm = (element, content = '') => {
    const newFormData = { ...this.state.formdata };
    const newElement = { ...newFormData[element.id] };

    if(content === '') {
      newElement.value = element.e.target.value;
    } else {
      newElement.value = content
    }


    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      
      // Submit form
    } else {
      this.setState({
        formError: true
      });
    }
  };

  resetImage = () => {

  }

  storeFilename = (filename) => {
    this.updateForm({id:'image'}, filename)
  }


  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>
            {this.state.formType}
          </h2>
          <div>
            <form onSubmit={e=>this.submitForm(e)}>
            <Fileuploader
              dir='players'
              tag={'Player image'}
              defaultImg={this.state.defaultImg}
              defaultImgName={this.state.formdata.image.value}
              resetImage={()=>this.resetImage()}
              filename={(filename)=> this.storeFilename(filename)}
            />

            <FormField
              id={"name"}
              formdata={this.state.formdata.name}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"lastname"}
              formdata={this.state.formdata.lastname}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"number"}
              formdata={this.state.formdata.number}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"position"}
              formdata={this.state.formdata.position}
              change={element => this.updateForm(element)}
            />
            <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something is wrong</div>
              ) : (
                ""
              )}
              <div className="adim_submit">
                <button onClick={e => this.submitForm(e)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
