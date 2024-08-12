import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold mb-12">Agustín Dávila</h1>
      </div>
      <ul className="mt-4 space-y-4 flex flex-col items-center">
        <li className="text-black w-full flex justify-center">
          <a
            href="/contacto"
            className="bg-purple-200 border border-gray-400 rounded-full px-4 py-2 text-center hover:bg-gray-300 w-48"
          >
            Contacto
          </a>
        </li>
        <li className="text-black w-full flex justify-center">
          <a
            href="https://github.com/ElAgus1/cv_page"
            className="bg-blue-200 border border-blue-400 rounded-full px-4 py-2 text-center hover:bg-blue-300 w-48"
          >
            GitHub
          </a>
        </li>
        <li className="text-black w-full flex justify-center">
          <a
            href="https://github.com/ElAgus1/cv_page"
            className="bg-blue-200 border border-blue-400 rounded-full px-4 py-2 text-center hover:bg-blue-300 w-48"
          >
            GitHub
          </a>
        </li>
      </ul>
    </main>
  );
}
