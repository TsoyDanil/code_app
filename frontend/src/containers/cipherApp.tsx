import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { shallowEqual, useSelector } from "react-redux"
import Loader from "../components/UI/loader/loader"
import { changeRequestData, decodedWord, encodeWord } from "../store/cipher/cipher.slice"
import { AppState, useAppDispatch } from "../store/store"
import './cipherApp.css'


const CipherApp = () => {
    const dispatch = useAppDispatch()

    const [disableButtons, setDisableButtons] = useState<boolean>(true)

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

    const checkButtons = () => {
        if (request.password.trim() === '' || request.word.trim() === ''){
            setDisableButtons(true)
        } else{
            setDisableButtons(false)
        }
    }

    useEffect(() => {
        checkButtons()
    }, [request])

    return (
        <>
            <div className="cipherApp_container">
                <h1>Cipher App</h1>
                <div className="group">      
                    <input name="word" onChange={(e) => {handleInputRequest(e)}} placeholder={'Word'}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>

                <div className="group">      
                    <input name="password" onChange={(e) => {handleInputRequest(e)}} placeholder={'Password'}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>
                <div className="cipherApp_container_button_container">
                    <button disabled={disableButtons} name="encode" onClick={(e) => {handleButtonClick(e)}}>ENCODE</button>
                    <button disabled={disableButtons} name="decode" onClick={(e) => {handleButtonClick(e)}}>DECODE</button>
                </div>
                <div>
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
                        {
                            loadingCipher ? <div>{<Loader/>}</div> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CipherApp