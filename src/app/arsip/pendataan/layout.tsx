import ContainerLayout from "@/components/templates/ContainerLayout";

interface ArsipPendataanLayoutProps {
  children: React.ReactNode;
}

export default function ArsipPendaataanLayout({
  children,
}: ArsipPendataanLayoutProps) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
