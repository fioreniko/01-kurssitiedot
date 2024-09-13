/*
https://fullstackopen.com/osa1/reactin_alkeet#tehtavat-1-1-1-2
tehtävä 1.2
*/

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

export default Part;
