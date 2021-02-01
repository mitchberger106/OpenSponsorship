import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    console.log(res);
    return res.data || [];
  },
  create: async (product) => {
    await axios.post('/api/product', product).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
}