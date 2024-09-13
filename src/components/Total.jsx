/*
https://fullstackopen.com/osa1/reactin_alkeet#tehtavat-1-1-1-2
tehtävät 1.1
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
