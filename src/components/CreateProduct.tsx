import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Iproduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

interface CreateProductProps {
    addNewProduct: (product: Iproduct) => void
}

export function CreateProduct(props: CreateProductProps) {

    const {
        addNewProduct
    } = props;

    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');

    const productData: Iproduct = {
        title: title,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setError('');

        if (title.trim().length === 0) {
            setError('Please fill currect title');
            return;
        }

        try {
            const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData);
            console.log(response);
            setTitle('');
            addNewProduct(response.data);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={title}
                onChange={changeHandler}
            />
            {error &&
                <ErrorMessage error={error} />
            }
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}