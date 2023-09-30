import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="text-4xl justify-between flex p-8 m-4 border bg-green-200 rounded-2xl items-center shadow-2xl">
           <Link to={"/"}>Home</Link>
           <Link className="border p-4 rounded-2xl bg-red-200 shadow-2xl text-white hover:bg-red-400" to={"/Login"}>Login</Link>

        </div>
    );
};

export default Home;