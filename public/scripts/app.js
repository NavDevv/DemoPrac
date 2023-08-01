// importing the key from the util.js with the default method 
import key from "./util.js"
console.log(key);

// importing from the util.js with the data and name of the file 
import { NewKey } from "./util.js";
console.log(NewKey);

// importing multiple exports in 1 as a object 
import * as utils from "./util.js"
console.log(utils);

