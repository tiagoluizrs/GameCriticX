import axios from "axios";

const axios_api = axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        Accept: "application/json",
    },
    params: {
        key: import.meta.env.VITE_RAWG_TOKEN,
    },
});

export const ApiService = {
    search: async (search: string, page: number, page_size: number) => {
        const response = await axios_api.get(`/games`, {
            params: {
                search,
                page,
                page_size, // Adjust page size as needed
            },
        });
        return response.data;
    },
    getGameDetails: async (id: string) => {
        const response = await axios_api.get(`/games/${id}`);
        return response.data;
    },
};
