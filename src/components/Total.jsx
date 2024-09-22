/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.5
*/

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises&nbsp;
        {props.osat[0].exercises + props.osat[1].exercises + props.osat[2].exercises}
      </p>
    </>
  );
};
export default Total;
