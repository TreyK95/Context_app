import React, { useContext } from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, AccountContext} from "../Providers/AccountProvider"

const Account = () => {
  
  // const {FirstName, LastName, Email}= useContext(AccountContext)
  const Account = useContext(AccountContext);

  // <AccountConsumer>
  //   {value => (
    return (
  <Card>
    <Card.Content>
      <Card.Header>First Name: {Account.FirstName}</Card.Header>
      <Card.Header>
        Last Name: {Account.LastName}
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <p>Email: {Account.Email}</p>
    </Card.Content>
  </Card>
 )
}
// </AccountConsumer>
export default Account;