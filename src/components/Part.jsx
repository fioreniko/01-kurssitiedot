/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.5
*/

const Part = (props) => {
  return (
    <>
      <p>
        {props.pippo.name} {props.pippo.exercises}
      </p>
    </>
  );
};

export default Part;
