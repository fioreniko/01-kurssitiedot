/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.5
*/

import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course.name} />
      <Content osat={course.parts} />
      <Total osat={course.parts} />
    </div>
  );
};

export default App;
