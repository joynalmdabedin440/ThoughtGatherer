import { useState } from "react";
import Blog from "./Blog";
import { use } from "react";
import { useEffect } from "react";
import { getBlogItem, removeBlogItem } from "../utilities/LocalStorage";
import { Link } from "react-router";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(getBlogItem())
    }, [])

    const removeBookmarksHandle = (id) => {
        removeBlogItem(id);
        setBlogs(getBlogItem())
    }

    if (blogs.length === 0) {
        return <div className="  p-6    flex flex-col items-center justify-center min-h-[calc(100vh-155px)]  ">
            <h1 className="text-center text-2xl mb-4">No Bookmarks Found</h1>
            <Link to="/blogs" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">Read Blogs</span>
            </Link>
        </div>
    }



    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <Blog removeBookmarksHandle={removeBookmarksHandle} isBookmarks={true} key={blog.id} blog={blog}></Blog>)

                }
            </div>
        </div>
    );
};

export default Bookmarks;