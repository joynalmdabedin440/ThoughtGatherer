import { toast } from "react-toastify";

const getBlogItem = () => {
    const blog = localStorage.getItem("blog");
    
    if (blog) {
        return JSON.parse(blog);
    }
    return [];
}

const setBlogItem = (blog) => {
    const blogs = getBlogItem();

    const isExist = blogs?.find((item) => item.id === blog.id);
    if (isExist) {
        toast.error("Already added to bookmark");
        
    }
    else {
        blogs.push(blog);
        localStorage.setItem("blog", JSON.stringify(blogs));
        toast.success("Added to bookmark");
        
    }


}

const removeBlogItem = (id) => { 
    const blogs = getBlogItem()
    const remaining = blogs.filter(item => item.id !== id)
    localStorage.setItem("blog", JSON.stringify(remaining));
    toast.error("Removed from bookmark");
}

export { getBlogItem, setBlogItem, removeBlogItem };