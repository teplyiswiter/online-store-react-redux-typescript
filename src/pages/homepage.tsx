import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getProducts } from "../features/products/productsSlice";
import ProductCard from "../components/products/product-item";

function Homepage() {
    const { products, isLoading } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts({ page: 0 }));
    }, []);
    console.log("products", products);
    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h2>Top products</h2>
            <div className="flex flex-wrap">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="w-full md:w-1/4 sm:w-1/3 w-1/2"
                    />
                ))}
            </div>
        </div>
    );
}
export default Homepage;
