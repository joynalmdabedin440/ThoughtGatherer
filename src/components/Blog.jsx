import { Link } from "react-router";
import notFoundImg from "../assets/404.jpg";
import { CiBookmarkRemove } from "react-icons/ci";

const Blog = ({ blog, isBookmarks, removeBookmarksHandle }) => {

    const { title, description, cover_image, published_at, id } = blog;


    return (
        <div className="relative">
            <Link to={`/blog/${id}`}>
                <div className="max-w-lg p-4 shadow-md h-full border-gray-200 border-2 dark:bg-gray-50 dark:text-gray-800 hover:scale-105 transition hover:border-primary rounded-md ">

                    <div className="space-y-4 " >
                        <div className="space-y-2">
                            <img src={cover_image || notFoundImg} alt="" className="block object-cover object-center w-full rounded-md h-72  bg-gray-100" />
                            <div className="flex items-center text-xs">
                                <span className="  mt-3 text-lg">{new Date(published_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Link to="" rel="noopener noreferrer" className="block">
                                <h3 className="text-xl font-semibold  dark:text-default-600 ">{title}</h3>
                            </Link>
                            <p className="leading-snug   dark:text-gray-600">{description}</p>
                        </div>
                    </div>

                </div>
            </Link>

            {isBookmarks && <div onClick={() => removeBookmarksHandle(id)} className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 absolute top-2 right-2 hover:bg-red-100 hover:text-red-500 transition hover:scale-105">
                <CiBookmarkRemove size={30} color="red" />
            </div>}
        </div>
    );
};

export default Blog;