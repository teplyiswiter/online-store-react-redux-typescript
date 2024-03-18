import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCategories } from "../../features/products/categoriesSlice";
import { Link } from "react-router-dom";
export default function CategoryList(props: { className?: string }) {
    const { className } = props;
    const { items, isLoading } = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    if (isLoading) return <p>Loading categories...</p>;
    return (
        <div className={className}>
            <h2 className="text-xl font-bold text-slate-900">
                Categories list
            </h2>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <Link className="capitalize" to={`category/${item}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
