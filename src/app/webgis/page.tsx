import LeafletMap from "@/components/molecules/LeafletMap";

export default function Webgis() {
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        WebGIS Posyandu di Desa Cisande
      </h1>
      <p className="scroll-m-20 mt-4 text-lg">
        WebGIS Posyandu di Desa Cisande adalah sebuah aplikasi berbasis web yang
        memuat informasi mengenai posyandu di Desa Cisande. Aplikasi ini dibuat
        untuk memudahkan masyarakat dalam mencari informasi mengenai posyandu di
        Desa Cisande.
      </p>
      <LeafletMap />
    </>
  );
}
