const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  try {
    res.json(
      await User.find().select('_id fullName email password aboutYou image')
    )
  } catch (err) {
    next(new Error('there was a problem... try again later'))
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    res.json(await User.findById(id))
  } catch (err) {
    next(new Error('the user does not exist'))
  }
})

router.get('/login/:email/:password', async (req, res, next) => {
  try {
    const { email, password } = req.params
    res.json(
      await User.find(
        { email: email, password: password },
        function (err, docs) {
          if (err) {
            console.log(err)
          } else {
            console.log(' logged profile: ', docs)
          }
        }
      )
    )
  } catch (err) {
    next(new Error('email or password are wrong'))
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await User.create(req.body))
  } catch (err) {
    next(new Error('this email or full name allready exist, try again'))
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
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
  } catch (err) {
    next(new Error('this user name allready exist, try again'))
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  res.status(204).json(await User.findByIdAndDelete(id))
})

module.exports = router
