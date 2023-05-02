import { useState } from "react";
import { Iproduct } from "../models";

interface ProductProps {
    product: Iproduct
    title: string
    value: number
}

export function Product(props: ProductProps) {

    const {
        product,
        title,
        value,
    } = props;

    const [details, setDetails] = useState<boolean>(false);

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={`${details ? 'py-2 px-4 bg-blue-400' : 'py-2 px-4 bg-yellow-400'}`}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details &&
                <div>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    )
}