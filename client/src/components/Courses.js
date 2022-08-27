import { Component } from "react";
import { Link } from "react-router-dom";

export default class Courses extends Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((response) => {
        this.setState({ courses: response });
      })
      .catch((error) => {
        console.log('Error fetching the data', error);
      });
  }

  render() {
    const courses = this.state.courses;
    const courseList = courses.map((course) => {
      return (
        <Link
          to={`/courses/${course.id}`}
          className="course--module course--link"
          key={course.id}
        >
          <span className="course--add--title"></span>
          <h2 className="course--label">Course</h2>
          <h3 className="course--title"> {course.title} </h3>
          <span className="course--add--title"></span>
        </Link>
      );
    });

    return (
      <main>
        <div className="wrap main--grid">
          {courseList}
          <Link
            to="/courses/create"
            className="course--module course--add--module"
          >
            <span className="course--add--title">+ New Course</span>
          </Link>
        </div>
      </main>
    );
  }
}
