
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto px-10 space-y-5 flex justify-between bg-yellow-400  border-y border-black py-10 lg:py-0 items-center">
        <div>
        <h2 className="text-6xl font-serif"><span className="underline decoration-4">Medium</span>  is placed to write, read and connect</h2>
        <h1>
          it's easy and free to post your thinking and connect with millions of readers
        </h1>
      </div>
        <img 
        className="hidden lg:h-full md:inline-flex md:h-32"
        src="https://th.bing.com/th/id/R.df08efdee81a4a52e3d48ca4b9404e02?rik=T3ASsuyM312y6Q&pid=ImgRaw&r=0" alt="" />
      </div>
    </main>
  );
}
