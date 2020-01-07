// this context (Data provider) file should be out of commpont
import React, { Component } from "react";
import axios from "axios";

// 1. this is where we will create context object
const 
Consumer_Context = React.createContext();

// create a provider that will hold the state
//Provider access to state for all components with its wrapper

export class Provider extends Component {
  // State , render, didmount method
  state = {
    contacts: [
      // we will have id, name, email, phone etc of the user
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
    // console.log(data);
  }

  // here we create provider compoment
  render() {
    return (
      <Consumer_Context.Provider value={this.state}>
        {this.props.children}
      </Consumer_Context.Provider>
    );
  }
}

// through this we can use consumer in other components
export const Consumer = Consumer_Context.Consumer;

//we want reducer to add(POST), update(PUT) and Deletethe api call
const reducer = (state, action) => {
  // add new data to api
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // state returning
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            contact = action.payload;
          }
          return contact;
        })
      };
    default:
      return state;
  }
};
