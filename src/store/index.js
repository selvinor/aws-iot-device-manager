import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";
const plantLibrary = require('../../assets/plant-library/plants.json');

const initialState = {
  counter: 1,
  plantLib: plantLibrary,
  activePlants:[],
  plantDetail:{}

};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;