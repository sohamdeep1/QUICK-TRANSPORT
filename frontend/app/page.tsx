import Image from "next/image";

console.log(process.env.NEXT_PUBLIC_API_URL);
export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/health`,
    { cache: "no-store" }
  );

  const text = await res.text();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">QUICK-TRANSPORT</h1>
      <p className="mt-4">Backend says: {text}</p>
    </main>
  );
}

/*export default function Home() {
  return (
      <main className="flex min-h-screen items-center justify-center bg-gray-900">
        <h1 className="text-4xl font-bold text-white">
            QUICK-TRANSPORT Frontend Ready
          </h1>
      </main>
  );
}*/
