import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const usePOsStore = defineStore('pos', () => {
    let BASE_URL = 'http://localhost:3000';
    let allPO = ref([]);
    const getPo = async () => {
        const res = await axios.get(`${BASE_URL}/po?page=1&limit=5`)
        allPO.value = res.data.data
    }

    const uploadExcel = async (file) => {
        const formData = new FormData();
        formData.append('file', file)
        const res = await axios.post(`${BASE_URL}/po/upload`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        const result = res.data.data;

        return result
    }

    const createPo = async (payload) => {
        const res = await axios.post(`${BASE_URL}/po`, payload)
        
        return res.data
    }

    return { getPo, uploadExcel, createPo, allPO }
})