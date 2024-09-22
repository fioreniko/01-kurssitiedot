/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.4
*/

import Part from "./Part";
const Content = (props) => {
  return (
    <>
      <Part pippo={props.osat[0]} />
      <Part pippo={props.osat[1]} />
      <Part pippo={props.osat[2]} />
    </>
  );
};

export default Content;
