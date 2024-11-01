import { Router, Request, Response } from 'express'

const pageRouter = Router()

const hobbies: string[] = ["Drawing", "Dancing", "Skydiving", "Eating"]

// Home
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', { title: "My Webpage", showInfo: false })
})

// About
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', { title: "About Us", hobbies })
})

export default pageRouter