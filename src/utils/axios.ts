import axios, { AxiosInstance } from 'axios'

export const getLiveLabels = () => {
    const serverURL = 'localhost:5000'
    return axios.get(`${serverURL}/predictions`)
}
