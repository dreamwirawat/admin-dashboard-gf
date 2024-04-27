import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="">
        <h1>Hello !!!</h1>
        <Link href={"/test"}>
          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go to test
          </button>
        </Link>
      </div>
    </div>
  );
}
