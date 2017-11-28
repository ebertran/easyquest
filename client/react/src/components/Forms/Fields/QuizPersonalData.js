import React, { Component } from "react";

import InputForm from "../inputForm/InputFormText";
import InputFormRadio from "../inputForm/InputFormRadio";
import InputFormArea from "../inputForm/InputFormArea";

const QuizPersonalData = (props) => 
<div>
<InputForm
type="text"
id="title"
placeholder="Enter title"
changeState={props.changeState}
/>

<InputForm
type="text"
id="author"
placeholder="Enter author"
changeState={props.changeState}
/>
<InputForm
type="text"
id="field"
placeholder="Enter field"
changeState={props.changeState}
/>
<InputForm
type="text"
id="tags"
placeholder="Enter tags (Use ';' to separte different tags)"
changeState={props.changeState}
/>
<InputFormArea
type="text"
id="description"
placeholder="Enter version"
changeState={props.changeState}
/>
<InputForm
type="text"
id="version"
placeholder="Enter version"
changeState={props.changeState}
/>
{/* <InputFormRadio
type="radio"
id="scope"
options={["public", "private"]}
changeState={props.changeState}
/>
<InputForm
type="text"
id="allowed"
placeholder="Enter users allowed"
changeState={props.changeState}
/>
<InputFormRadio
type="radio"
id="active"
options={["on", "off"]}
changeState={props.changeState}
/> */}
<InputForm
type="text"
id="dimension1"
placeholder="Enter dimension 1"
changeState={props.changeState}
/>
<InputForm
type="text"
id="dimension2"
placeholder="Enter dimension 2"
changeState={props.changeState}
/>
<InputForm
type="text"
id="dimension3"
placeholder="Enter dimension 3"
changeState={props.changeState}
/>
<InputForm
type="text"
id="dimension4"
placeholder="Enter dimension 4"
changeState={props.changeState}
/>
</div>


export default QuizPersonalData;