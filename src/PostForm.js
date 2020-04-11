import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class PodtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/Users`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, email } = this.state;
    return (
      // <form onSubmit={this.submitHandler}>
      //   <div>
      //     <input
      //       type="text"
      //       name="name"
      //       value={name}
      //       onChange={this.changeHandler}
      //     />
      //   </div>
      //   <div>
      //     <input
      //       type="text"
      //       name="email"
      //       value={email}
      //       onChange={this.changeHandler}
      //     />
      //   </div>
      //   <button type="submit">submit</button>
      // </form>
      <Form onSubmit={this.submitHandler} className="login-form">
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="emil"
            name="email"
            value={email}
            onChange={this.changeHandler}
            placeholder="Email"
          />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Log in</Button>
      </Form>
    );
  }
}
export default PodtForm;
