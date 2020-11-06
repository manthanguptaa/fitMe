import { useState, useEffect } from "react"
import * as posenet from "@tensorflow-models/posenet"
import to from "await-to-js"

export default function(modelConfig) {
  const modelConfigString = JSON.stringify(modelConfig)
  const [net, setNet] = useState(null)
  useEffect(() => {
    async function loadNet() {
      const [err, poseNet] = await to(
        posenet.load(JSON.parse(modelConfigString))
      )
      if (err) {
        setNet(err)
        return
      }
      setNet(poseNet)
    }
    loadNet()
  }, [modelConfigString])
  return net
}
