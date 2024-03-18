import axiosConfig from "../../app/axiosConfig";

const getCategories = async () => {
    return await axiosConfig
        .get("/products/categories")
        .then((res) => res.data);
};

const categoriesService = {
    getCategories,
};

export default categoriesService;
