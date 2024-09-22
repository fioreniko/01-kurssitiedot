/*
https://fullstackopen.com/osa1/java_scriptia#tehtavat-1-3-1-5
tehtävät 1.4
*/

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export default Header;
