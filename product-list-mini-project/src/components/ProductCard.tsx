import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product
}

function ProductCard( { product } : ProductCardProps ){

    return(
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition" >

            <img src={product.image} className="w-full  rounded object-center "  alt="" />
            <h3 className="mt-3 text-lg font-bold" > { product.name } </h3>
            <p className="text-sm text-gray-500" >{ product.category }</p>
            <p className="mt-2 text-xl font-semibold text-blue-600" > { product.price } </p>

            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded" >
                Add to Cart
            </button>
        </div>
    )

}


export default ProductCard;