import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/profile`);
    return res.data || [];
  },
  create: async (product) => {
    await axios.post('/api/profile', product).then(res => {
        console.log(res);
        console.log(res.data);
      });
  },
  update: async (product) => {
    await axios.put('/api/profile', product).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
}