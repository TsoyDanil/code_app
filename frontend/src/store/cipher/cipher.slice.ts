import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { cipherApi } from '../../api/cipherApi'
import IRequest from '../../interfaces/IRequest'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import ICipherState from './ICipherState'

const namespace: string = 'cipher'

export const encodeWord = createAppAsyncThunk(
    `${namespace}/encodeWord`,
    async (request: IRequest) => {
        return cipherApi.encodeReq(request)
    }
)

export const decodedWord = createAppAsyncThunk(
    `${namespace}/decodedWord`,
    async (request: IRequest) => {
        return cipherApi.decodeReq(request)
    }
)



export const cipherSlice = createSlice({
    name: namespace,
    initialState:{
        request:{
            word:'',
            password:''
        },
        response:{
            result:'',
            message:''
        },
        loadingCipher: false
    } as ICipherState,
    reducers:{
        changeRequestData(state, action: PayloadAction<{name: string, value: string}>){
            try{
                state.request = {
                    ...state.request,
                    [action.payload.name]: action.payload.value.toLowerCase()
                }
            } catch(err: unknown){
                console.log(err)
            }
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(encodeWord.rejected, (state) => {
            state.loadingCipher = false
        })
        .addCase(encodeWord.pending, (state) => {
            state.loadingCipher = true
        })
        .addCase(encodeWord.fulfilled, (state, action) => {
            state.response = {...action.payload}
            state.loadingCipher = false
        })
        .addCase(decodedWord.rejected, (state) => {
            state.loadingCipher = false
        })
        .addCase(decodedWord.pending, (state) => {
            state.loadingCipher = true
        })
        .addCase(decodedWord.fulfilled, (state, action) => {
            state.response = {...action.payload}
            state.loadingCipher = false
        })
    }
})

export const {
    changeRequestData
} = cipherSlice.actions