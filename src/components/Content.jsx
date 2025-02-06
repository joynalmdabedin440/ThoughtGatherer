import { useOutletContext } from "react-router";
import notFoundImg from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const { blog } = useOutletContext()
    const { title, tags, cover_image, body_html,url } = blog
    //console.log(blog);



    return (
        <div>


            <div className="max-w-4xl p-4 shadow-md ">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={cover_image || notFoundImg} alt={title} className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex flex-wrap py-2 gap-2   text-xl dark:border-gray-400">

                            {
                                tags?.map(tag => (<a key={tag} rel="noopener noreferrer" href="#" className="pr-3 py-1 rounded-sm hover:underline dark:bg-default-400 dark:text-gray-900">#{tag}</a>))
                            }



                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href={url} target="_blank"  className="block">
                            <h3 className="text-2xl font-semibold text-default-600">{title}</h3>
                        </a>
                        <div>

                            <Markdown rehypePlugins={[rehypeRaw]}>
                            {body_html}

                            </Markdown>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Content;