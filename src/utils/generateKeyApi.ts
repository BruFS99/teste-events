import { Md5 } from "ts-md5"

function generateKeys() {
  const { REACT_APP_PUBLIC_KEY_API, REACT_APP_PRIVATE_KEY_API } = process.env

  const nowTimeStamp = new Date().getTime()

  const publicKey = REACT_APP_PUBLIC_KEY_API
  const privateKey = REACT_APP_PRIVATE_KEY_API

  const hash = Md5.hashStr(
    `${nowTimeStamp}${REACT_APP_PRIVATE_KEY_API}${REACT_APP_PUBLIC_KEY_API}`
  )

  return {
    nowTimeStamp,
    publicKey,
    privateKey,
    hash,
  }
}

export default generateKeys
