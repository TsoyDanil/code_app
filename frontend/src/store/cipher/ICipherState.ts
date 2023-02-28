import IRequest from "../../interfaces/IRequest";
import IResponse from "../../interfaces/IResponse";


export default interface ICipherState{
    request: IRequest,
    response: IResponse,
    loadingCipher: boolean
}