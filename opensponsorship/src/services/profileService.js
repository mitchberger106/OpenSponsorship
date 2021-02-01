import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/profile`);
    return res.data || [];
  },
  create: async (profile) => {
    console.log(profile)
    await axios.post('/api/profile', profile).then(res => {
        console.log(res);
        console.log(res.data);
      });
  },
  update: async (profile) => {
    await axios.put('/api/profile', profile).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
}