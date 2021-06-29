const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  res.json(
    await User.find().select('_id fullName email password aboutYou image')
  )
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.get('/login/:email/:password', async (req, res, next) => {
  const { email, password } = req.params
  res.json(await User.find({ email: email, password: password }))
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await User.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const profileToUpdate = req.body
  const updatedProfile = {
    fullName: profileToUpdate.fullName,
    aboutYou: profileToUpdate.aboutYou,
    image: profileToUpdate.image,
  }
  res.json(
    await User.findByIdAndUpdate(
      id,
      { $set: updatedProfile },
      { new: true, useFindAndModify: false },
      function (err, docs) {
        if (err) {
          console.log(err)
        } else {
          console.log('Updated profile : ', docs)
        }
      }
    )
  )
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  res.status(204).json(await User.findByIdAndDelete(id))
})

module.exports = router
