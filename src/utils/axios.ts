import axios, { AxiosInstance } from 'axios'


export const getServerConnection = (): AxiosInstance => {
    const serverConnection = axios.create({
        baseURL: ""
    })

    serverConnection.interceptors.request.use((request) => {
        request.params= {
            ...request.params,
        }
        return request
    }, (error) => Promise.reject(error))


    return serverConnection
}
