import Link from "next/link";
import ContainerLayout from "@/components/templates/ContainerLayout";

export default function Home() {
  return (
    <ContainerLayout className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold mb-8">
        Selamat datang di Posyandu Desa Cisande
      </h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/webgis" className="text-blue-500 hover:underline">
            WebGIS Posyandu di Desa Cisande
          </Link>
        </li>
        <li>
          <Link href="/arsip" className="text-blue-500 hover:underline">
            Arsip Pendataan Posyandu di Desa Cisande
          </Link>
        </li>
      </ul>
    </ContainerLayout>
  );
}
