export interface Product {
    category: string;
    description: string;
    discountPercentage?: number;
    id: string;
    images: string[];
    price: number;
    rating?: number;
    title: string;
    stock: number;
    brand: string;
    thumbnail: string;
}
