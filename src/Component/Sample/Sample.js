import React, { Component } from 'react';

class Sample extends component {
  state = {
    operator: [
      { name: "additon", value: 20 }],
  }
  state1 = {
    operator1: [
      { name: "substraction", value: 30 }],
  }
  state2 = {
    operator2: [
      { name: "multiplication", value: 10 }
    ],
  }
tital :"execute";
}
asses = () => {
  const newstate = this.state.Sample.map((Sample) => {
    const tempSample = Sample;
    tempSample.value += 10;
    return tempSample})

    console.log(newstate);
    this.setstate({newstate});
  }
         const newstate = this.state1.Sample.map((Sample) => {
     const tempSample = Sample;
     tempSample.value -= 10;
     console.log(tempSample);
     this.setstate({newstate});
   }
        const newstate = this.state2.Sample.map((Sample) => {
     const tempSample = Sample;
     tempSample.value *= 10;
     console.log(tempSample);
     this.setstate({newstate});
  
render(){
  return (
    <div>
      <button onClick={this.asses}>execute</button>
      <br />
      <h2>{this.state.tital} </h2>
      {
        this.state.Sample((Sample) => (
          <Sample>Samplevalue={Sample.value} name={Sample.name}</Sample>
        ))
         }
         { this.state.Sample((Sample)=>(
            <Sample>Samplevalue={Sample.value} name={Sample.name}</Sample>
         
      ))}
      {
         this.state.Sample((Sample)=>(
                <Sample>Samplevalue={Sample.value} name={Sample.name}</Sample>
      ))
     }
            </div>
  )
}
        }
}
export default Sample;