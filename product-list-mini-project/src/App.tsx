import { useState } from "react"
import type { Category } from "./components/CategoryFilter"
import { products } from "./data/products";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";

function App() {
  
  const [ selectedCategory , setSelectedCategy ] = useState<Category>('All');


  const filteredProducts = selectedCategory === 'All' ? products : products.filter((p)=> p.category === selectedCategory )


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4" >

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800" >Our Products</h1>

        <CategoryFilter onSelect={setSelectedCategy}  />


        {

          filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg" >No products found</p>
          ):(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" >

                {
                  filteredProducts.map((product)=>(
                    <ProductCard  key={product.id}  product={product} />
                  ))
                }

            </div>
          )

        }

    </div>
  )
}

export default App
