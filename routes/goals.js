const express = require('express')
const router = express.Router()
const Goal = require('../models/Goal')

router.get('/', async (req, res, next) => {
  res.json(
    await Goal.find()
      .select('_id text isChecked author')
      .populate('author', 'fullName -_id')
  )
})

router.get('/:authorId', async (req, res, next) => {
  const { authorId } = req.params
  res.json(
    await Goal.find({ author: authorId }).populate('author', 'fullName -_id')
  )
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await Goal.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const updatedGoal = req.body
  console.log(req.body, id)
  res.json(await Goal.findByIdAndUpdate(id, updatedGoal, { new: true }))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.status(204).json(await Goal.findByIdAndDelete(id))
})

module.exports = router
