// import { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Admin = () => {
    // const [registeredUsers, setRegisteredUsers] = useState(0);
    // const [submittedArticles, setSubmittedArticles] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/api/admin");
    //             setRegisteredUsers(response.data.registeredUsers);
    //             setSubmittedArticles(response.data.submittedArticles);
    //         } catch (error) {
    //             console.error("Error fetching admin data", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            {/* <Header /> */}
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4 text-center">Admin Dashboard</h1>
                <div className="w-full max-w-lg p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Registered Users: </h2>
                    <h2 className="text-2xl font-bold mb-4">Submitted Articles: </h2>
                    {/* {submittedArticles.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold mb-2">List of Submitted Articles:</h2>
                            <ul>
                                {submittedArticles.map((article, index) => (
                                    <li key={index}>
                                        {article.title} - {article.author}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )} */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Admin;