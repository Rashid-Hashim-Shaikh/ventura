
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex items-center justify-center text-center h-[80vh] w-full ">

    <Link className="border-b border-black" href="/ipo">
      Go to Ipo page
    </Link>
    </div>
  );
}
