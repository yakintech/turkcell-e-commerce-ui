import { axiosInstance } from "../config/axiosInstance"


export const baseService = {
    getAll: async (url: string) => {
        try {
            const response = await axiosInstance.get(url, {withCredentials: true})
            return response.data
        } catch (error) {
            console.log(`BaseService getAll error ${url}: `, error)
            throw error
        }
    },
    get: async (url: string, id: string) => {
        try {
            const response = await axiosInstance.get(`${url}/${id}`, {withCredentials: true})
            return response.data
        }
        catch (error) {
            console.log(`BaseService get error ${url}/${id}: `, error)
            throw error
        }
    },
    post: async (url: string, data: any) => {
        try {
            const response = await axiosInstance.post(url, data, {withCredentials: true})
            return response.data
        }
        catch (error) {
            console.log(`BaseService post error ${url}: `, error)
            throw error
        }
    },
    put: async (url: string, id: string, data: any) => {
        try {
            const response = await axiosInstance.put(`${url}/${id}`, data, {withCredentials: true})
            return response.data
        }
        catch (error) {
            console.log(`BaseService put error ${url}/${id}: `, error)
            throw error
        }
    },
    delete: async (url: string, id: string) => {
        try {
            const response = await axiosInstance.delete(`${url}/${id}`, {withCredentials: true})
            return response.data
        }
        catch (error) {
            console.log(`BaseService delete error ${url}/${id}: `, error)
            throw error
        }
    }
}