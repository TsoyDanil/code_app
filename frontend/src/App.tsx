import { AppDispatch, AppState } from "./store/store"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import CipherApp from "./containers/cipherApp"

const App = () => {

  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <CipherApp/>
    </>
  )
}

export default App