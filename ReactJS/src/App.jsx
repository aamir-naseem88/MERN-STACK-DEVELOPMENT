import { Routes, Route } from 'react-router-dom';
import FirstComponent from "./FirstComponent";
import JsTopics from "./JsTopics";
import ImportExport, { InnerComponent } from "./ImportExport";
import NestedComponents from "./NestedComponents";
import JsxExample from "./JsxExample";
import JsInJsx from "./JsInJsx";
import EventsInReact from "./EventsInReact";
import UseState from "./UseState";
import CounterApp from "./CounterApp";
import ToggleButton from "./ToggleButton";
import PropsInReactJS from "./PropsInReactJS";
import UsestateAsProps from "./UsestateAsProps";
import { useState } from "react";
import PropsChildern from "./PropsChildern";
import OnChangeEvent from "./OnChangeEvent";
import SpredOperator from "./SpredOperator";
import FormHandling from "./FormHandling";
import PrintArrayTables from "./PrintArrayTables";
import UseEffectHook from "./UseEffectHook";
import DateInReact from "./DateInReact";
import DigitalClock from "./DigitalClock";
import DigitalClockDropdown from "./DigitalClockDropdown";
import LightDarkTheme from "./LightDarkTheme";
import ColorToggle from "./ColorToggle";
import ExternalCSS from "./ExternalCSS";
import UsingModules from "./UsingModules";
import StyledComponets from "./StyledComponets";
import UseRef from "./UseRef";
import UncontrolledComponents from "./UncontrolledComponents";
import UncontrollComUseRef from "./UncontrollComUseRef";
import FunctionsProps from "./FunctionsProps";
import ForwarRefPrarent from "./ForwarRefPrarent";
import UseFormStatus from "./UseFormStatus";
import UseTransition from "./UseTransition";
import DerivedStates from "./DerivedStates";
import LiftingStateParen from "./LiftingStateParen";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import PropsFullExample from './PropsFullExample';

function App() {
  // using variables as props
  // let userName = "Fatima Bibi"
  // let age = 25;

  // using array as props

  // const colors = ["Green", "Red", "Blue"];

  // using objects
  // const user = {
  //   name: "Fatima Bibi",
  //   email: "fatima@euio.com"
  // }

  // using array of objects
  // const students = [
  //   {
  //     id: 1,
  //     name: "Fatima Bibi",
  //     class: "8th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 2,
  //     name: "Zainab Batool",
  //     class: "6th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 3,
  //     name: "Muhammad Hussain",
  //     class: "5th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 4,
  //     name: "Ayesha Bibi",
  //     class: "3rd",
  //     result: "Pass"
  //   }
  // ];
// state as props example
// const[empName, setEmpName] = useState("Fatima Batool");

// Functions as props example
// function fun1(name) {
//     alert(name);
  // }

  // function fun2() {
  //   alert("i am fun2");
  // }

  // Sending props as variables in child component
  // let nameVar = "Fatima"

  // sending array of objects
  // const students = [
  //   {id:1, name:"Fatima"},
  //   {id:2, name:"Zainab"},
  //   {id:3, name:"Ayesha"},
  //   {id:4, name:"Haleema"}
  // ]

// Receiving data from api

// const [post, setPost] = useState([]);

// async function getData(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   setPost(data);
// }


return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-bold text-center p-2 bg-green-200">
          Welcome to new course of ReactJS
        </h1>
        <br />
        {/* <JsTopics /> */}
        {/* <FirstComponent /> */}
        {/* <ImportExport /> */}
        {/* <InnerComponent /> */}
        {/* <NestedComponents /> */}
        {/* <JsxExample /> */}
        {/* <JsInJsx /> */}
        {/* <EventsInReact /> */}
        {/* <UseState /> */}
        {/* <CounterApp /> */}
        {/* <ToggleButton /> */}
        {/* {/* <PropsInReactJS /*user={userName} age={age}*/ /*color={colors}*/ /*user={user}*/ /*students={students}*/}
        {/* <UsestateAsProps emp={empName}/> */}
        {/* <button onClick={()=> setEmpName("Zainab Rani")}>Change Name</button> */}
        {/* Props Childern topic component */}
       {/* <PropsChildern>
        <h1 className="text-4xl text-blue-600">Student Card</h1>
        <h4 className="text-2xl text-green-500">Student Name: Fatima Bibi</h4>
        <h4 className="text-2xl text-green-500">Student Age: 45</h4>
        <h4 className="text-2xl text-green-500">Student Email: fatima@ymail.com</h4>
        <h4 className="text-2xl text-green-500">Marital Status: Single</h4>
       </PropsChildern> */}
       {/* <OnChangeEvent /> */}
       {/* <FormHandling /> */}
       {/* <SpredOperator /> */}
       {/* <FormHandling /> */}
       {/* <PrintArrayTables /> */}
       {/* <UseEffectHook /> */}
       {/* <DateInReact /> */}
       {/* <DigitalClockDropdown /> */}
       {/* <LightDarkTheme /> */}
       {/* <ColorToggle /> */}
       {/* <ExternalCSS /> */}
       {/* <UsingModules /> */}
       {/* <StyledComponets /> */}
       {/* <UseRef /> */}
       {/* <UncontrolledComponents /> */}
       {/* <UncontrollComUseRef /> */}
       {/* <FunctionsProps fun1={fun1} name="Fatima Batool" /> */}
        {/* <ForwarRefPrarent /> */}
        {/* <UseFormStatus /> */}
        {/* <UseTransition /> */}
        {/* <DerivedStates /> */}
        {/* <LiftingStateParen /> */}
        {/* <AsyncAwaitInJs /> */} 
        {/* Routes */}
        {/* <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/services' element={<Services />} /> 
        </Routes>               */}
        <PropsFullExample /*user={nameVar}*/ /*myArray={students}*/ /*posts={post}*/ />
        {/* <button onClick={getData}>Click</button> */}
      </div>
    </>
  );
}

export default App;
