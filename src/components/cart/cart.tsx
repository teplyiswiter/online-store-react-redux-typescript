import { useAppSelector } from "../../app/hooks";
import { ReactComponent as IconCart } from "../../images/cart.svg";

export default function Cart() {
    const { items } = useAppSelector((state) => state.cart);
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {items.length}
                    </p>
                </div>
                <IconCart />
            </div>
        </div>
    );
}
