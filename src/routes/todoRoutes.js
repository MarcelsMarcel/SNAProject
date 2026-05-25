import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const todos = await db.todo.findMany({
            where: { userId: req.userId }
        })
        res.json(todos)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/', async (req, res) => {
    const { task } = req.body
    try {
        const todo = await db.todo.create({
            data: { task, userId: req.userId }
        })
        res.json(todo)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { completed } = req.body
    try {
        const todo = await db.todo.update({
            where: { id: parseInt(id) },
            data: { completed }
        })
        res.json(todo)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await db.todo.delete({
            where: { id: parseInt(id) }
        })
        res.json({ message: 'Deleted' })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router