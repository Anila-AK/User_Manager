import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import {Consumer} from "../Context";
export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const  { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger"> Contact</span>
              </h1>
              {/* list the contact by calling get API */}
              {
                  contacts.map(
                      contact=>{
                          return <Contact key={contact.id} contact={contact}></Contact>
                      }
                  )
              }
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
