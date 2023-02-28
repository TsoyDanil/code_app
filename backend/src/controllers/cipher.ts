import express, { Router, Request, Response } from 'express'
import { cipherService, CipherService } from "../services/cipherService";


export class CipherController {
    private router: Router
    private service: CipherService
    constructor() {
        this.router = express.Router()
        this.service = cipherService
    }

    public getRouter = (): Router => {
        return this.router
    }

    
}