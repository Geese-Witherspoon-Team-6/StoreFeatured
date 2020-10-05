import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';


export const fetchData = async () => {
  return await axios.get('/api/seller', {
    params: {
      sellername: 'Mincing Mockingbird'
    }
  })
}

fetchData();