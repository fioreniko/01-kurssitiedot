/*
https://fullstackopen.com/osa1/reactin_alkeet#tehtavat-1-1-1-2
tehtävä 1.2
*/

import Part from "./Part";
const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  );
};
export default Content;
