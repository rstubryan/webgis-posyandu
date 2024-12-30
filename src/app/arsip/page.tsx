import Link from "next/link";
import locations from "@/data/locations.json";

export default function Arsip() {
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Arsip Pendataan Posyandu di Desa Cisande
      </h1>
      <div className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          {locations.map((location, index) => (
            <li key={index}>
              <Link href="/login" className="text-blue-500 hover:underline">
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
