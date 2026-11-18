import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts";

function Post (){

    const { id } = useParams<{ id: string }>();
    const post = posts.find(p=> p.id === Number(id))
    

    if(!post){
        return (
            <div className="max-w-3xl mx-auto p-8 text-center" >
                <h1 className="text-red-600 font-bold text-3xl" > Post not found</h1>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-8" >
            <h1> {post.title} </h1>
            <p> { post.date } </p>
            <p> { post.content } </p>

            <Link to="/blog"  className="text-blue-600 mt-5 hover:underline" >
                All posts
            </Link>

        </div>
    )

}

export default Post