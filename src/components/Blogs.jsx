import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';
import notFoundImg from "../assets/404.jpg";
import Loader from './Loader';



const Blogs = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://dev.to/api/articles?&top=7");
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs data');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }
    if (isLoading) {
        return <Loader />
    }


    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={(blogs[0]?.cover_image) || notFoundImg} alt={blogs[0]?.title} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                            {blogs[0]?.title}

                        </h3>
                        <span className="text-xs dark:text-gray-600">{new Date(blogs[0]?.published_at).toLocaleDateString()
                        }</span>
                        <p>{blogs[0]?.description
                        }</p>
                    </div>
                </a>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)

                    }
                </div>

                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};

export default Blogs;