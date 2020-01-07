import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import {Consumer} from "../Context";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    // delete the user info from our fake database
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (error) {
      console.log("=======================================");
      console.log(error);
      console.log("=======================================");
    }
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {
                <h4>
                  {`${name}`}
                  {/* show the rest of details like email and phone number */}
                  <i
                    onClick={this.onShowClick}
                    className="fa fa-sort-down"
                    style={{ cursor: "pointer" }}
                  ></i>
                  {/* to delete the user entry from the copied api */}
                  <i
                    onClick={() => this.onDeleteClick(id, dispatch)}
                    className="fa fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                  ></i>
                  {/* // this is to edit the contact from the page */}
                  <Link to={`contact/edit/${id}`}>
                    <li
                      className="fa fa-pencil"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "black"
                      }}
                    ></li>
                  </Link>
                </h4>
              }

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
