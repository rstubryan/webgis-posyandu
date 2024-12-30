import ContainerLayout from "@/components/templates/ContainerLayout";

interface WebgisLayoutProps {
  children: React.ReactNode;
}

export default function WebgisLayout({ children }: WebgisLayoutProps) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
