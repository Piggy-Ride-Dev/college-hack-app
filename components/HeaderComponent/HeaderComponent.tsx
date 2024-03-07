import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import logo from "../../assets/logo.svg";

function HeaderComponent() {
  return (
    <Header className="sticky top-0 z-[1] flex items-center bg-neutral-100 px-2 py-6 shadow-md shadow-gray-200">
      <Image src={logo} alt="Logo" />
    </Header>
  );
}

export default HeaderComponent;
