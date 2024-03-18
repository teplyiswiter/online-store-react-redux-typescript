import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProducts } from "../../features/products/productsSlice";
import ProductCard from "./product-card";
export default function ProductList(props: { className?: string }) {
    const { className } = props;
    const { products, isLoading } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts({ page: 0 }));
    }, []);

    if (isLoading) return <p>Loading products...</p>;
    return (
        <div className={`${className} `}>
            <h2 className="text-xl font-bold text-slate-900">
                Top rated products list
            </h2>
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
