import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="JavaScript logo"
        width={180}
        height={38}
        priority
      />
    </main>
  );
}
