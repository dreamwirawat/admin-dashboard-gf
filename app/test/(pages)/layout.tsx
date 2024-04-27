import Image from "next/image";
import Link from "next/link";

export default async function HomeLayoutPage({ children }: { children: any }) {
  return (
    <div className="test-page">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dream
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Back
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {children}
      </div>
    </div>
  );
}
