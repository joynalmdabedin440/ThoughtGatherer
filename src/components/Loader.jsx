import { RingLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-64px)]">
            <RingLoader color="red" size={ 100} ></RingLoader>

            
        </div>
    );
};

export default Loader;