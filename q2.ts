// const axios = require("axios");
import axios from "axios";


const getTodo = async (todoId: number) => {
  try{
    const userId = await axios.get("https://jsonplaceholder.typicode.com/todos/"+todoId);
    const user = await axios.get("https://jsonplaceholder.typicode.com/users/"+userId.data.userId);
    return {
      owner: user.data.name,
      title: userId.data.title,
      completed: userId.data.completed,
    };
  }catch (error) {
    return "INVALID USER ID ";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

// ณัฐดนัย ติ๊บดอนจันทร์ 660610756