import { useOutletContext } from "react-router";


const Author = () => {
    const { blog } = useOutletContext()
    

    return (
        <div>
            author details
            
        </div>
    );
};

export default Author;