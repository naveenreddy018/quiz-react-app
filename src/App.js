import logo from './logo.svg';
import './App.css';
import Button from './button';
import Image from './images/image';
import Chil_props from './children props';
// function App() {
//   return (
//     // 
//     <div>
//       <h2>
//       hello world
//     </h2>
//     <Button></Button>
//     <Image
    
//      src="https://m.economictimes.com/thumb/msid-105000581,width-1600,height-900,resizemode-4,imgsize-47368/virat-kohli.jpg" 
//      width="300px"
//      height="300px"
//      alt="virat kholi"
//      style={{
//       border : "2px solid green "
//      }}
    
//     />
//     <Chil_props>
//       <h3>children props</h3>
//       <h4>hello child prosp</h4>
//     </Chil_props>
//     </div>
//   );
// }
// import MyComponent from './condition/index.js';
// import Greeting from './class components/index.js';
// import Timer from './did mount statge/index.js';
// function App(){
//  return (
//   <>
//   <MyComponent></MyComponent>
//   <Greeting></Greeting>  
//   <Timer></Timer>
//   </>
//  )
// // }

// import Controlled_forms from './controlled forms';
// import Forms from './controlled forms/form';
// function App(){

//   return(
//     <Controlled_forms></Controlled_forms>

//   )
// }
// export default App;
import UseEffectEaxmple from './use_effect/case1';
import Stack from './navigations/stack';
import RunOnceExample from './use_effect/case2';
import LiveClock from './use_effect/case4';
import Effect from './use_effect/p';
import Example from './use_effect/mainexmaple';
import Greeting from './class components';
import MyComponent from './condition';
import FormData from './controlled forms/form';

function App(){
  return (
    <>
    {/* <Stack></Stack> */}
    {/* <RunOnceExample></RunOnceExample>
    <UseEffectEaxmple></UseEffectEaxmple> */}
    {/* <LiveClock></LiveClock>
    // <Effect> */}
    {/* // <Example></Example> */}
    {/* <Greeting></Greeting>
    <MyComponent></MyComponent> */}
    <FormData></FormData>
    </>
  )
}
export default App;