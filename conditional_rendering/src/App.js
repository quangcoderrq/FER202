import React from 'react';

const UserGreeting = () => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = () => {
  return <h1>Please sign in.</h1>;
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not currently'}</b> logged in.
        </div>
      </div>
    );
  }
}

export default App;