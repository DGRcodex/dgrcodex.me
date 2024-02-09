import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-sky-200 to-blue-200 dark:from-sky-900 dark:to-[#0141ff]">
      <Image
        src="/portafolio2.png"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-4xl font-bold text-black dark:text-gray-100">
          dgrcodex.me está en construcción por SAMBALAB
        </p>
        <div className="flex place-items-center gap-4 p-4">
          <Image
            src="/dgrcodex4.png"
            alt="DGR CODEX Logo"
            width={300}
            height={300}
            priority
          />
          <Image
            src="/logosambalab.png"
            alt="SAMBALABAB Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </main>
  );
}
