import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router";
import Author from "./Author";

const BlogDetails = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [blog, setBlog] = useState({});

    const blogId = useParams().blogId;

    useEffect(() => {
        fetch(`https://dev.to/api/articles/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    // console.log(blog);


    const { title, comments_count, reading_time_minutes, public_reactions_count, published_at,tags } = blog



    return (
        <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-3xl  font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">

                            <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>


                    {/* Tabs */}
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap   ">
                        <Link to="" onClick={() => setActiveTab(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTab === 0 ? "border border-b-0" : "border-b"} rounded-t-lg 
                        
                        
                        border-gray-600 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to="author" onClick={() => {
                            setActiveTab(1)
                        }} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   rounded-t-lg 
                           
                        border-gray-600  ${activeTab === 1 ? "border border-b-0" : "border-b"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        
                        
                    </div>
                </div>
                <div className="dark:text-gray-100">
                    <Outlet context={{blog}} />

                </div>
            </article>
           
        </div>
    );
};

export default BlogDetails;