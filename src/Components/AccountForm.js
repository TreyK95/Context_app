import React from 'react'
import { Form, } from 'semantic-ui-react'
import { AccountConsumer } from '../Providers/AccountProvider';

class AccountForm extends React.Component {
  state= {
    UserName: this.props.UserName,
    membershipLevel: this.props.membershipOptions,
  };

  handleChange = (e, {name, value}) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { UserName, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="New UserName"
        type="text"
        name="UserName"
        value={UserName}
        onChange={this.handleChange}
        />
      <Form.Select
        label="Membership Level"
        name="membershipLevel"
        value="membershipLevel"
        onChange={this.handleChange}
        options={membershipOptions}
        />
      </Form>
    )
  }
}

const ConnectedAccountForm = (props)=>{
  return(
    <AccountConsumer>
      { value => (
        <AccountForm
        {...props}
        UserName={value.UserName}
        membershipLevel={value.membershipLevel}
        />
      )}
    </AccountConsumer>
  )
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default ConnectedAccountForm;