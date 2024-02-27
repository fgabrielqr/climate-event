import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        Climate Change Event
                    </Link>
                    <nav>
                        <Link href="/about" className="ml-4 text-gray-300 hover:text-white">
                            Sobre
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header