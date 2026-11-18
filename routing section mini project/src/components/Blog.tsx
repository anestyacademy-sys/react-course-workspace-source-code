
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

function Blog () {

    return(
        <div className="max-w-3xl mx-auto p-8" >
            <h1 className="text-4xl font-bold mb-6" >All Posts</h1>

            <div className='space-y-4' >
                {
                    posts.map(post => (
                        <div className='bg-white p-6 rounded shadow' key={post.id}  >
                            <h2 className='font-bold text-2xl' > { post.title } </h2>
                            <p className='text-gray-500 text-sm' > { post.date } </p>
                            <p className='text-gray-700 mt-2' > { post.excerpt } </p>

                            <Link to={`/blog/${post.id}`}  className='text-blue-600 mt-4 hover:underline' >
                                Read more
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}


export default Blog;