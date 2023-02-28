import {AxiosResponse} from "axios";
import IRequest from "../interfaces/IRequest";
import IResponse from "../interfaces/IResponse";
import { instance } from "./instance";


class CipherApi {
    public encodeReq = async(request: IRequest): Promise<IResponse> => {
        try{
            const response: AxiosResponse<IResponse> = await instance.post('/encode', request)
            return response.data
        } catch(err: unknown){
            const error = err as Error
            const response: IResponse = {
                result: 'Some error appeared',
                message: error.message
            }
            return response
        }
    }

    public decodeReq = async(request: IRequest): Promise<IResponse> => {
        try{
            const response: AxiosResponse<IResponse> = await instance.post('/decode', request)
            return response.data
        } catch(err: unknown){
            const error = err as Error
            const response: IResponse = {
                result: 'Some error appeared',
                message: error.message
            }
            return response
        }
    }
}

export const cipherApi = new CipherApi()