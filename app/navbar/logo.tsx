import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logo/logo-1.svg"
        height={80}
        width={180}
        alt="logo"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
