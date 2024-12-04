import Image from "next/image";

export const HyperCeLogo = ({ size = 20, className }: { size?: number; className: string }) => {
  return (
    <Image
      width={size}
      height={size}
      src="https://demo.hyperce.io/logo.svg"
      alt="hyperceLogo"
      className={className}
    ></Image>
  );
};
