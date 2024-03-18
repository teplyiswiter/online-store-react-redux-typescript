import CategoryList from "../components/category/category-list";
import ProductList from "../components/products/product-list";

function Homepage() {
    return (
        <div>
            <div className="flex flex-nowrap">
                <CategoryList className="flex-none w-52" />
                <ProductList className="flex-1" />
            </div>
        </div>
    );
}
export default Homepage;
