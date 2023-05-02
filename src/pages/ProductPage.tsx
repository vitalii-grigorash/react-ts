import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { Iproduct } from "../models";

export function ProductPage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    function closeModal() {
        if (modal) {
            close()
        } else {
            open()
        }
    }

    function addNewProduct(product: Iproduct) {
        closeModal();
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading &&
                <Loader />
            }
            {error &&
                <ErrorMessage
                    error={error}
                />
            }
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    title={'Hello Title'}
                    value={44}
                />
            ))}
            {modal ? (
                <Modal
                    title={'Create new product'}
                    closeModal={closeModal}
                >
                    <CreateProduct
                        addNewProduct={addNewProduct}
                    />
                </Modal>
            ) : (
                <button className="py-2 px-4 border bg-yellow-400 hover:text-white" onClick={closeModal}>Add product</button>
            )
            }
        </div>
    );
}