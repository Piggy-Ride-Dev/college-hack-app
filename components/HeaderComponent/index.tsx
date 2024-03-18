import Image from "next/image";
import logo from "../../assets/logo.svg";

function HeaderComponent() {
  return (
    <div className="sticky top-0 z-[1] flex h-16 items-center bg-neutral-100 px-2 py-6 shadow-md shadow-gray-200">
      <Image src={logo} alt="Logo" />
    </div>
  );
}

export default HeaderComponent;
