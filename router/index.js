import express from 'express'
let router = new express()

router.get('/', (req, res) => res.json('Hello Trello!'))

export default router
