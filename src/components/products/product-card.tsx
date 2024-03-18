import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { Product } from "../../types/product";
import { ReactComponent as IconCart } from "../../images/cart-for-button.svg";
import { ReactComponent as IconStar } from "../../images/star.svg";
import { showModal } from "../../features/modal/modalSlice";
import { Link } from "react-router-dom";

export default function ProductCard(props: {
    product: Product;
    className: string;
}) {
    const { product, className } = props;
    const dispatch = useAppDispatch();
    const fullStars = Math.round(product.rating || 0);
    return (
        <div
            className={`${className} relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
        >
            <span className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                    className="object-cover w-full"
                    src={product.thumbnail}
                    alt={product.title}
                />
                {product.discountPercentage && (
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {Math.round(product.discountPercentage)}% OFF
                    </span>
                )}
            </span>
            <div className="mt-4 px-5 pb-5">
                <span>
                    <h5 className="text-xl tracking-tight text-slate-900">
                        <Link
                            to={`/products/${product.category}/${product.id}`}
                        >
                            {product.title}
                        </Link>
                    </h5>
                </span>
                <div className="mt-2 mb-5 flex items-center justify-between sm:flex-col md:flex-row">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">
                            ${product.price}
                        </span>
                        {product.discountPercentage && (
                            <span className="text-sm text-slate-900 line-through">
                                $
                                {Math.round(
                                    (100 + product.discountPercentage) *
                                        0.01 *
                                        product.price
                                )}
                            </span>
                        )}
                    </p>
                    {product.rating && (
                        <div className="flex items-center">
                            {Array.apply(null, Array(fullStars)).map(
                                (_, index) => (
                                    <IconStar
                                        key={index}
                                        className="h-5 w-5 text-yellow-300"
                                    />
                                )
                            )}
                            {Array.apply(null, Array(5 - fullStars)).map(
                                (_, index) => (
                                    <IconStar
                                        key={index}
                                        className="h-5 w-5 text-grey-300"
                                    />
                                )
                            )}
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                {product.rating}
                            </span>
                        </div>
                    )}
                </div>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));
                        dispatch(showModal());
                    }}
                    className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <IconCart />
                    Add to cart
                </button>
            </div>
        </div>
    );
}
