
import Link from "next/link";

export default function Home() {
  return (
    <Link className="grid grid-cols-4 border-b last:border-none" href="/ipo">
      Go to Ipo page
    </Link>
  );
}
