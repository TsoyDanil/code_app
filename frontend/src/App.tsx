import { AppDispatch, AppState } from "./store/store"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useEffect } from "react"
import { decodedWord, encodeWord } from "./store/cipher/cipher.slice"

const App = () => {

  const dispatch: AppDispatch = useDispatch()

  const {request, response, loadingCipher} = useSelector((state: AppState) => state.cipher, shallowEqual)

  

  return (
    <>
      
    </>
  )
}

export default App