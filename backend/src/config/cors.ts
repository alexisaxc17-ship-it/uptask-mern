import { CorsOptions } from "cors"

const whitelist = [
  process.env.FRONTEND_URL?.trim(),
  "https://uptask-mern-ten.vercel.app"
]

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
      return
    }

    console.log("Origen bloqueado por CORS:", origin)
    console.log("Whitelist:", whitelist)

    callback(new Error("Error de CORS"))
  }
}