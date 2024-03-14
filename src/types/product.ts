export interface Product {
    category: string;
    description: string;
    discountPercentage?: number;
    id: number;
    images: string[];
    price: number;
    rating?: string;
    title: string;
    stock: number;
    brand: string;
    thumbnail: string;
}
