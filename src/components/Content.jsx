/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.3
*/

import Part from "./Part";
const Content = (props) => {
  return (
    <>
      <Part pippo={props.osa1} />
      <Part pippo={props.osa2} />
      <Part pippo={props.osa3} />
    </>
  );
};
export default Content;
