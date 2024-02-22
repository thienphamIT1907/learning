import axios from "axios";

const fetchData = (param) => {  
  const result = axios.get(`https://jsonplaceholder.typicode.com/users/1`);
  return result;
};

export default fetchData;
