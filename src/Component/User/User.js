import React from 'react';

const User = (props) => {

  console.log(props);
  return <div> Sample : {props.name} value: 
  {props.value} </div>

}
export default User;