import ContainerLayout from "@/components/templates/ContainerLayout";

interface ArsipLayoutProps {
  children: React.ReactNode;
}

export default function ArsipLayout({ children }: ArsipLayoutProps) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
