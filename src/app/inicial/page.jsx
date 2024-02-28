import Link from "next/link";


const Inicial = () => {
    return (
        <div>

            <div className="bg-gray-900 flex flex-col md:flex-row items-center justify-center min-h-screen py-2">
                <div className="hidden md:block md:w-1/1">
                    <img
                        src="https://source.unsplash.com/random/800x800?climate+change,future"
                        alt="Climate Change & Future"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-6 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
                        <h1 className="text-5xl font-bold mb-4 text-blue-500">
                            Evento Científico sobre Mudanças Climáticas
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Junte-se a nós em um evento esclarecedor sobre as últimas descobertas na pesquisa sobre mudanças climáticas.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="/registro" legacyBehavior>
                                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Inscreva-Se
                                </a>
                            </Link>
                            <Link href='/submeter' legacyBehavior>
                                <a className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                    Submeter Artigo
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { Inicial }