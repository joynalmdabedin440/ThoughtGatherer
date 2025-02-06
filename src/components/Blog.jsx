import { Link } from "react-router";
import notFoundImg from "../assets/404.jpg";

const Blog = ({ blog }) => {

    const { title, description, cover_image, published_at,id } = blog;

    return (
        <Link to={`/blog/${id}`}>
            <div className="max-w-lg p-4 shadow-md  border-gray-200 border-2 dark:bg-gray-50 dark:text-gray-800 hover:scale-105 transition hover:border-primary rounded-md">

                <div className="space-y-4 " >
                    <div className="space-y-2">
                        <img src={cover_image || notFoundImg} alt="" className="block object-cover object-center w-full rounded-md h-72  bg-gray-100" />
                        <div className="flex items-center text-xs">
                            <span className="  mt-3 text-lg">{new Date(published_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link to="" rel="noopener noreferrer" className="block">
                            <h3 className="text-xl font-semibold  dark:text-default-600 hover:underline">{title}</h3>
                        </Link>
                        <p className="leading-snug   dark:text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Blog;