// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Registro = () => {
    // const router = useRouter();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [affiliation, setAffiliation] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post("/api/register", { name, email, affiliation });
    //         router.push("/");
    //     } catch (error) {
    //         console.error("Error during registration", error);
    //     }
    // };

    return (
        <div>

            {/* <Header /> */}
            <div className="bg-gray-900 flex flex-col md:flex-row items-center justify-center min-h-screen py-2">
                <div className="hidden md:block md:w-1/1">
                    <img
                        src="https://source.unsplash.com/random/800x800?climate+change,future"
                        alt="Climate Change & Future"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-6 text-center md:text-left">

                    <h1 className="text-5xl font-bold mb-4 text-blue-500">Inscreva-Se</h1>
                    <form
                        // onSubmit={handleSubmit}
                        className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-md"
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">
                                Nome
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="affiliation" className="block text-gray-700">
                                Afiliação
                            </label>
                            <input
                                type="text"
                                name="affiliation"
                                id="affiliation"
                                // value={affiliation}
                                // onChange={(e) => setAffiliation(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold py-2 px-4 rounded"
                        >
                            Register
                        </button>
                    </form>
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Registro;