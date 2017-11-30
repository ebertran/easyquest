import React, { Component } from "react";

import InputFormText from "../inputForm/InputFormText";
import InputFormRadio from "../inputForm/InputFormRadio";
import InputFormArea from "../inputForm/InputFormArea";
import InputFormImage from "../inputForm/InputFormImage";

const UserFields = props => (
  <div>
    <InputFormText
      type="text"
      id="username"
      placeholder="Enter username"
      changeState={props.changeState}
    />
    <InputFormText
      type="email"
      id="email"
      placeholder="Enter email"
      changeState={props.changeState}
    />
    <InputFormText
      type="password"
      id="password"
      placeholder="Enter password"
      changeState={props.changeState}
    />
    <InputFormText
      type="text"
      id="name"
      placeholder="Enter name"
      changeState={props.changeState}
    />
    <InputFormText
      type="text"
      id="surename"
      placeholder="Enter surename"
      changeState={props.changeState}
    />
    <InputFormText
      type="date"
      id="birthdate"
      placeholder="Enter birthdate"
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="sex"
      options={["female", "male", "trans", "other"]}
      changeState={props.changeState}
    />
    <InputFormText
      type="text"
      id="zipcode"
      placeholder="Enter zipcode"
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="education"
      options={["none", "primary", "secundary", "superior"]}
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="occupation"
      options={["studying", "working", "unemployed", "retired"]}
      changeState={props.changeState}
    />
    <InputFormText
      type="text"
      id="organization"
      placeholder="Enter organization"
      changeState={props.changeState}
    />

    <InputFormImage
      type="radio"
      id="avatar"
      options={["rex", "anquilo", "trice", "para", "brachi"]}
      changeState={props.changeState}
    />
    <InputFormImage
      type="radio"
      id="color"
      options={["studying", "working", "unemployed", "retired"]}
      changeState={props.changeState}
    />
  </div>
);

export default UserFields;
