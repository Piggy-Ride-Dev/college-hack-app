import Image from "next/image";
import logo from "../../assets/logo.svg";
import DrawerComponent from "../DrawerComponent";

function HeaderComponent() {
  return (
    <div className=" sticky top-0 z-[1] bg-neutral-100 py-2 shadow-md shadow-gray-200">
      <div className=" flex h-16 w-full items-center justify-between px-6 ">
        <Image src={logo} alt="Logo" />
        <DrawerComponent />
      </div>
    </div>
  );
}

export default HeaderComponent;
