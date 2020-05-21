import React from "react";
import "./app.css";
import Navbar from "./navbar/navbar";
import Music from "./music/music";
import News from "./news/news";
import Settings from "./settings/settings";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./dialogs/dialogs-container";
import UsersContainer from "./users/users-сontainer";
import ProfileContainer from "./profile/profile-container";
import HeaderContainer from "./header/header-container";
import LoginPage from "./login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from '../redux/app-reducer';
import Preloader from "./common/preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users/" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

