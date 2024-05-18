import express from "express";
import { db} from '../config/db.config'
import { router } from "../routes/funcionario.routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/employees', router)

db.then(() => {
  app.listen(7070, () => console.log('port 7070'))
})