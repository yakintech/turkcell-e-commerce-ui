import { axiosInstance } from "../config/axiosInstance"


const authService = {
    login: async (email: string, password: string) => {
        try {
            let response = await axiosInstance.post('login', { email, password },
                {
                    withCredentials: true
                }
            )
            return response.data

        } catch (error) {
            console.log("authService Error", error)
            throw error
        }
    }
}


export default authService