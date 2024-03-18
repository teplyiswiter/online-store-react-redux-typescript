import { useParams } from "react-router-dom";

export default function ProductDetails() {
    let { productId } = useParams();
    return <p>productID {productId}</p>;
}
