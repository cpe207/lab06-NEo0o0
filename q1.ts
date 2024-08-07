// const axios = require("axios");
import axios from "axios";





/* assign interface/type to the function definition properly */

async function getUser(userId: number) {
  try {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users/"+userId)
  return resp.data.name;}
  catch (error) {
    return "INVALID USER ID";
  }
}

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
// ณัฐดนัย ติ๊บดอนจันทร์ 660610756