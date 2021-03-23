import React from 'react'

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    UserName: "NoobMaster",
    dateJoined: "1/4/16",
    membershipLevel: "Silver",
  };

  render(){
    return(
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider