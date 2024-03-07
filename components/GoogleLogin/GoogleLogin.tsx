import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "../../assets/icons/google.svg";

export default function GoogleLogin() {
  return (
    <Link
      href="https://college-hack-api.azurewebsites.net/auth/google"
      className="flex items-center justify-center w-[200px] border-gray-500 shadow-md shadow-gray-500 p-2 gap-2 rounded-md"
    >
      <Image src={GoogleIcon} alt="icon" width={32} height={32} />
      Login with Google
    </Link>
  );
}
