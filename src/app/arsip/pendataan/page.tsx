import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const data = [
  {
    no: 1,
    namaBalita: "Ahmad",
    beratBadan: "12 kg",
    tinggiBadan: "85 cm",
    namaIbu: "Siti",
    alamat: "Jl. Merdeka No. 1",
  },
  {
    no: 2,
    namaBalita: "Budi",
    beratBadan: "14 kg",
    tinggiBadan: "90 cm",
    namaIbu: "Aisyah",
    alamat: "Jl. Sudirman No. 2",
  },
];

export default function ArsipPendataanBalita() {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-8">Arsip Pendataan Balita</h1>
      <Button className="mb-4">Berkas Foto</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Balita</TableHead>
            <TableHead>Berat Badan</TableHead>
            <TableHead>Tinggi Badan</TableHead>
            <TableHead>Nama Ibu Kandung</TableHead>
            <TableHead>Alamat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.no}>
              <TableCell>{item.no}</TableCell>
              <TableCell>{item.namaBalita}</TableCell>
              <TableCell>{item.beratBadan}</TableCell>
              <TableCell>{item.tinggiBadan}</TableCell>
              <TableCell>{item.namaIbu}</TableCell>
              <TableCell>{item.alamat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
