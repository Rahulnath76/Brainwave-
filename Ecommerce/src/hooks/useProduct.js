import { useEffect, useState } from "react";

function useProduct(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    console.log(data);
    return data;
}

export default useProduct;