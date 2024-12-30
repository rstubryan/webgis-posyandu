import ContainerLayout from "@/components/templates/ContainerLayout";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
