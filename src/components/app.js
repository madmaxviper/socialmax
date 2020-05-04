import React from "react";
import "./app.css";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Music from "./music/music";
import News from "./news/news";
import Settings from "./settings/settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./dialogs/dialogs-container";
import UsersContainer from './users/users-сontainer';
import ProfileContainer from "./profile/profile-container";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users/" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
