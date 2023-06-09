import IResponse from "../interfaces/IResponse";

const Vigenere = require('caesar-salad').Vigenere;

export class CipherService {
    public encodeWord = (password: string, wordToEncode: string): IResponse => {
        try{
            if (password.trim() === '' || wordToEncode.trim() === ''){
                throw new Error('Empty field in request')
            }
            const encodedWord = Vigenere.Cipher(password).crypt(wordToEncode)
            const response: IResponse = {
                result: encodedWord,
                message: 'Encoded successfully'
            }
            return response
        } catch(err: unknown){
            const error = err as Error
            const response: IResponse = {
                result: '',
                message: error.message
            }
            return response
        }
    }

    public decodeWord = (password: string, wordToDecode: string): IResponse => {
        try{
            if (password.trim() === '' || wordToDecode.trim() === ''){
                throw new Error('Empty field in request')
            }
            const decodedWord = Vigenere.Decipher(password).crypt(wordToDecode)
            const response: IResponse = {
                result: decodedWord,
                message: 'Decoded successfully'
            }
            return response
        } catch(err: unknown){
            const error = err as Error
            const response: IResponse = {
                result: '',
                message: error.message
            }
            return response
        }
    }
}

export const cipherService = new CipherService()