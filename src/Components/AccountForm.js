import React from 'react'
import { Form, } from 'semantic-ui-react'
import { AccountConsumer } from '../Providers/AccountProvider';

class AccountForm extends React.Component {
  state= {
    FirstName: this.props.FirstName,
    LastName: this.props.LastName,
    Email: this.props.Email,
  };

  handleChange = (e, {name, value}) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const Account = {...this.state,}
    this.props.updateAccount(Account);
  }

  render() {
    const { FirstName, LastName, Email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="New FirstName"
        type="text"
        name="FirstName"
        value={FirstName}
        onChange={this.handleChange}
        />
         <Form.Input
        label="New LastName"
        type="text"
        name="LastName"
        value={LastName}
        onChange={this.handleChange}
        />
         <Form.Input
        label="New Email"
        type="text"
        name="Email"
        value={Email}
        onChange={this.handleChange}
        />
        <Form.Button color="green">Save</Form.Button>
      </Form>
      
    )
  }
}

const ConnectedAccountForm = props=>{
  return(
    <AccountConsumer>
      { value => (
        <AccountForm
        {...props}
        FirstName={value.FirstName}
        LastName={value.LastName}
        updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;