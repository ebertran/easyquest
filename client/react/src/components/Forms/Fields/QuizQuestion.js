import React from 'react'

import InputForm from "../InputForm/InputFormText";
import InputFormRadio from "../InputForm/InputFormRadio";
import InputFormArea from "../InputForm/InputFormArea";

const Question = (props) => 
<div>
<InputForm
type="text"
id="question"
placeholder="Enter Question"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="text"
id="answer1"
placeholder="Enter Answer 1"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="text"
id="dimension1"
placeholder="Enter dimension 1"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="number"
id="value1"
placeholder="Enter value 1"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="text"
id="answer2"
placeholder="Enter Answer 2"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="text"
id="dimension2"
placeholder="Enter dimension 2"
index={props.index}
changeState={props.changeState}
/>

<InputForm
type="number"
id="value2"
placeholder="Enter value 2"
index={props.index}
changeState={props.changeState}
/>


<hr />
</div>

export default Question
