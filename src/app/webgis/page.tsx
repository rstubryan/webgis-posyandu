import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import locations from "@/data/locations.json";
import LeafletData from "@/components/templates/LeafletData";

export default function Webgis() {
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        WebGIS Posyandu di Desa Cisande
      </h1>
      <p className="scroll-m-20 my-4 text-lg">
        WebGIS Posyandu di Desa Cisande adalah sebuah aplikasi berbasis web yang
        memuat informasi mengenai posyandu di Desa Cisande. Aplikasi ini dibuat
        untuk memudahkan masyarakat dalam mencari informasi mengenai posyandu di
        Desa Cisande.
      </p>
      <LeafletData />
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Latitude</TableHead>
              <TableHead>Longitude</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((location, index) => (
              <TableRow key={index}>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.address}</TableCell>
                <TableCell>{location.lat}</TableCell>
                <TableCell>{location.lng}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
