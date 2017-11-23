import React, { Component } from "react";

import InputForm from "../InputForm/InputFormText";
import InputFormRadio from "../InputForm/InputFormRadio";
import InputFormArea from "../InputForm/InputFormArea";

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
id="Author"
placeholder="Enter author"
changeState={props.changeState}
/>
<InputForm
type="text"
id="Field"
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
<InputFormRadio
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
/>
</div>

export default QuizPersonalData;