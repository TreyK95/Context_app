import React, { useContext } from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, AccountContext} from "../Providers/AccountProvider"

const Account = () => {
  
  const {UserName, membershipLevel, dateJoined}= useContext(AccountContext)
  // const Account = useContext(AccountContext);

  // <AccountConsumer>
  //   {value => (
    return (
  <Card>
    <Card.Content>
      <Card.Header>{UserName}</Card.Header>
      <Card.Meta>
        Date Joined: {dateJoined}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Membership Level: {membershipLevel}</p>
    </Card.Content>
  </Card>
 )
}
// </AccountConsumer>
export default Account;