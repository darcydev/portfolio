import React, { Component } from "react";
import styled from "styled-components";
import { Form, Icon, Input } from "antd";

import SimpleButton from "../../UI/button";

const { TextArea } = Input;

export default class ContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Container>
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Please enter a valid e-mail!"
                },
                {
                  required: true,
                  message: "Please enter a valid e-mail!"
                }
              ]
            })(<Input size="large" placeholder="Email" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("message", {
              rules: [{ required: true, message: "What's your message?" }]
            })(<TextArea placeholder="Message" rows={8} />)}
          </Form.Item>
          <Form.Item>
            <SimpleButton style={{ textAlign: "center" }}>Send</SimpleButton>
          </Form.Item>
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  border: 1px solid var(--primary);
  padding: 20px;

  .ant-form {
    text-align: center;

    .ant-form-item {
      margin: 5px 0;

      input {
        font-family: inherit;
        padding: 10px 0 5px 0;
        border: none;
        border-bottom: 1px solid var(--primary);
      }

      textarea {
        width: 100%;
        font-family: inherit;
        padding: 10px 0 5px 0;
        border: none;
      }
    }
  }
`;