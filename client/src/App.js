import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Components
import Header from "./components/Header";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";

import withContext from "./Context";
import PrivateRoute from "./components/PrivateRoute";

// Declare variables withContext Component
const HeaderWithContext = withContext(Header);
const userSignInWithContext = withContext(UserSignIn);
const userSignUpWithContext = withContext(UserSignUp);
const userSignOutWithContext = withContext(UserSignOut);
const coursesWithContext = withContext(Courses);
const courseDetailWithContext = withContext(CourseDetail);
const createCourseWithContext = withContext(CreateCourse);
const updateCourseWithContext = withContext(UpdateCourse);


// Navigates the user through routes and displaying the correct components
const App = () => (
  <Router>
    <div>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={coursesWithContext} />
        <PrivateRoute path="/courses/create" component={createCourseWithContext} />
        <PrivateRoute path="/courses/:id/update" component={updateCourseWithContext} />
        <Route path="/courses/:id" component={courseDetailWithContext} />

        <Route path="/signin" component={userSignInWithContext} />
        <Route path="/signup" component={userSignUpWithContext} />
        <Route path="/signout" component={userSignOutWithContext} />

      </Switch>
    </div>
  </Router>
);

export default App;
