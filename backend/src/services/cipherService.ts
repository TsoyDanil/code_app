
const Vigenere = require('caesar-salad').Vigenere;

export class CipherService {
    public encodeWord = (password: string, wordToEncode: string): string => {
        const result = Vigenere.Cipher(password).crypt(wordToEncode)
        return result
    }
}