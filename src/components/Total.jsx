/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.3
*/

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises&nbsp;
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};
export default Total;
