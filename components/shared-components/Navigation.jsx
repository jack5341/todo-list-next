import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex py-10 justify-between absolute w-full">
      <div className="logo ml-20">
        <Image
          src="/assets/icons/navigation.svg"
          alt="navigation-logo"
          width={120}
          height={31.62}
        />
      </div>
      <div className="logo mr-20">
        <Image
          src="/assets/icons/gear.svg"
          alt="navigation-gear"
          width={22}
          height={22}
        />
      </div>
    </div>
  );
}
