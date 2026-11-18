

type Category = "All" | "Electronics" | "Clothing" | "Books";

interface CategoryFilterProps{
    onSelect: ( category: Category ) =>void;
}

function CategoryFilter({ onSelect } : CategoryFilterProps ){

    const categories: Category[] = [ 'All', 'Electronics', 'Clothing', 'Books' ];

    return(

        <div className="flex gap-2 flex-wrap justify-center mb-8" >
            {
                categories.map((cat)=>(
                    <button 
                        className="px-2 py-2 rounded-full bg-blue-600 text-white"
                        key={cat}
                        onClick={()=>onSelect(cat)}
                    >
                        { cat }
                    </button>
                ))
            }
        </div>

    )



}

export default CategoryFilter;
export type { Category }

