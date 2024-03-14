import axiosConfig from "../../app/axiosConfig";

const getProducts = async ({
    page,
    size = 20,
}: {
    page: number;
    size?: number;
}) => {
    return await axiosConfig
        .get(`/products?limit=${size}&skip=${page * size}`)
        .then((res) => res.data?.products);
};
const getSingleProduct = async (id: number) => {
    const response = await axiosConfig.get("products/" + id);

    return response.data;
};
const getCategory = async (data: string) => {
    const response = await axiosConfig.get("/products/category/" + data);

    return response.data;
};

const productService = {
    getProducts,
    getSingleProduct,
    getCategory,
};

export default productService;
