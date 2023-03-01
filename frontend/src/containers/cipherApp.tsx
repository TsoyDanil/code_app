import { ChangeEvent, MouseEvent } from "react"
import { shallowEqual, useSelector } from "react-redux"
import Loader from "../components/UI/loader/loader"
import { changeRequestData, decodedWord, encodeWord } from "../store/cipher/cipher.slice"
import { AppState, useAppDispatch } from "../store/store"
import './cipherApp.css'


const CipherApp = () => {
    const dispatch = useAppDispatch()
    const {request, response, loadingCipher} = useSelector((state: AppState) => state.cipher, shallowEqual)

    const handleInputRequest = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeRequestData(
            {
                name: e.target.name,
                value: e.target.value
            }
        ))
    }

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === "encode"){
            dispatch(encodeWord(request))
        } else{
            dispatch(decodedWord(request))
        }
    }

    return (
        <>
            <div className="cipherApp_container">
                <h1>Cipher App</h1>
                <input name="word" onChange={(e) => {handleInputRequest(e)}} placeholder="Add word here"/>
                <input name="password" onChange={(e) => {handleInputRequest(e)}} placeholder="Add password here"/>
                <div>
                    <button name="encode" onClick={(e) => {handleButtonClick(e)}}>ENCODE</button>
                    <button name="decode" onClick={(e) => {handleButtonClick(e)}}>DECODE</button>
                </div>
                <div>
                    {
                    loadingCipher ? <div>{<Loader/>}</div>
                    : 
                    <div className="textData_container">
                        {
                            response.result.trim() !== '' ? 
                            <p>{response.result}</p> :
                            <p>Result will be here</p>
                        }
                        {
                            response.message.trim() !== '' ? 
                            <p>{response.message}</p> :
                            <p>Additional data will be here</p>
                        }
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CipherApp