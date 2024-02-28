// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Submeter = () => {
    // const router = useRouter();
    // const [title, setTitle] = useState("");
    // const [abstract, setAbstract] = useState("");
    // const [file, setFile] = useState();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("abstract", abstract);
    //     formData.append("file", file);

    //     try {
    //         await axios.post("/api/submission", formData);
    //         router.push("/");
    //     } catch (error) {
    //         console.error("Error during submission", error);
    //     }
    // };

    return (
        <div>
            {/* <Header /> */}
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-5xl font-bold mb-4 text-blue-500">Submeter Artigo</h1>
                <form
                    // onSubmit={handleSubmit}
                    className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-md"
                >
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">
                            Título
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="abstract" className="block text-gray-700">
                            Resumo do Artigo
                        </label>
                        <textarea
                            name="abstract"
                            id="abstract"
                            // value={abstract}
                            // onChange={(e) => setAbstract(e.target.value)}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700">
                            Adicionar Arquivo
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            // onChange={(e) => setFile(e.target.files[0])}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mt-1 block"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold py-2 px-4 rounded"
                    >
                        Submeter
                    </button>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Submeter;