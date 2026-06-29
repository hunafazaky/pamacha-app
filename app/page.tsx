import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/dragon-book.avif"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/dragon-book.avif"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
