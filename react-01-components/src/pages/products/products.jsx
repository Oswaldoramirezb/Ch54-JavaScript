import { ProductCard } from "../../components/productCard/productCard";

const products = [
    {
        id: 100,
        title: "Jabón Zote",
        price: 25
    },
    {
        id: 101,
        title: "Suavitel",
        price: 55
    },
    {
        id: 102,
        title: "Jabón Roma",
        price: 35
    },
    {
        id: 104,
        title: "Jabón Foca",
        price: 28
    },
];



const Products = () => {
    return (

        <>
            <h2>Productos</h2>
            {products.map(({ id, title, price }) => <ProductCard key={id} title={title} price={price} />)}
        </>
    );

}
export { Products };