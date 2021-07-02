import Image from "next/image";

export default function Container({ children }) {
  return (
    <>
      <nav className="flex py-10 justify-between absolute w-full">
        <div className="logo mx-20 mt-6">
          <a href="https://uxact.ly/">
            <Image
              src="/assets/icons/logo.svg"
              alt="navigation-logo"
              width={120}
              height={31.62}
            />
          </a>
        </div>
        <div className="logo mx-20 mt-6">
          <Image
            src="/assets/icons/gear.svg"
            alt="navigation-gear"
            className="cursor-pointer"
            width={22}
            height={22}
          />
        </div>
      </nav>
      {children}
      <footer></footer>
    </>
  );
}
