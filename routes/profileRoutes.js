const mongoose = require('mongoose');
const profile = mongoose.model('profiles');

module.exports = (app) => {

  app.get(`/api/profile`, async (req, res) => {
    let profiles = await profile.find();
    return res.status(200).send(profiles);
  });

  app.post(`/api/profile`, async (req, res) => {
    let profile = await profile.create(req.body);
    return res.status(201).send({
      error: false,
      profile
    })
  })

  app.put(`/api/profile/:id`, async (req, res) => {
    const {id} = req.params;

    let profile = await profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile
    })

  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const {id} = req.params;

    let profile = await profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile
    })

  })

}