const API = Module.API;
const Hiwire = {};
const Tests = {};
API.tests = Tests;
API.version = "0.23.0a1";
Module.hiwire = Hiwire;
const getTypeTag = (x) => Object.prototype.toString.call(x);
API.getTypeTag = getTypeTag;
