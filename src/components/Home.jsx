import { Link } from "react-router";

import animatedImg from "../assets/wave.svg"



const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-155px)] relative ">
            <div className="hero  ">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient ">ThoughtGather</span> </h1>
                        <p className="py-6">
                            ThoughtGather is the bridge between the complex world of technology and the curious minds eager to understand it
                        </p>
                       

                        <div className="flex justify-center space-x-4">
                            <Link to="/blogs" class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Read Blogs</span>
                            </Link>
                            <Link to="/bookmarks" class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Bookmarks</span>
                            </Link>
                            
                        </div>



                    </div>
                </div>
            </div>
            <img className="absolute bottom-0 w-full" src={animatedImg} alt="Gradient Image" />

        </div>
    );
};

export default Home;