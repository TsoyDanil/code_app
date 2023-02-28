import express, { Router, Request, Response } from 'express'
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import { cipherService, CipherService } from "../services/cipherService";


export class CipherController {
    private router: Router
    private service: CipherService
    constructor() {
        this.router = express.Router()
        this.service = cipherService
        this.router.post('/encode', this.encodeWord)
        this.router.post('/decode', this.decodeWord)
    }

    public getRouter = (): Router => {
        return this.router
    }

    private encodeWord = (req: Request, res: Response): void => {
        const request: IRequest = {
            password: req.body.password,
            word: req.body.word
        }
        const response: IResponse = this.service.encodeWord(request.password, request.word)
        res.send(response)
    }

    private decodeWord = (req: Request, res: Response): void => {
        const request: IRequest = {
            password: req.body.password,
            word: req.body.word
        }
        const response: IResponse = this.service.decodeWord(request.password, request.word)
        res.send(response)
    }
}