import express from "express"
import { json } from "body-parser"
import { currentUserRouter } from "./routes/currentUser"
import { signinRouter } from "./routes/signin"
import { signoutRouter } from "./routes/signout"
import { signupRouter } from "./routes/signup"
import { errorHandler } from "./middlewares/errorHandler"

const app = express()
app.use(json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
