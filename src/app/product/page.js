
const productList = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page() {
    let products = await productList();
    return (
        <div>
            <h4>Prdocut list</h4>
            {
                products?.map((item, index) => (
                    <ul key={index}>
                        <li>{item?.brand}</li>
                    </ul>
                ))
            }
        </div>
    )
}

