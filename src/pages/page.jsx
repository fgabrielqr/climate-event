import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Climate Change Scientific Event</h1>
      <p className="mb-4">
        This event aims to gather researchers, scientists, and professionals to discuss the latest findings and solutions related to climate change. Join us and contribute to the global effort to understand and combat climate change.
      </p>
      <div className="flex items-center space-x-4">
        <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>
        <Link href="/submit-article" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Submit Article
        </Link>
      </div>
    </div>
  )
}

export default HomePage
