import Image from "next/image";
import Nel from "@/public/images/Nel.svg";
import { CVButton } from "./cv-button";

export function Hero() {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center bg-sand-50 px-4 sm:px-6 lg:px-[60px] py-16 lg:py-[40px]"
      aria-label="Introduction"
    >
      <div
        className="flex flex-col items-center justify-center gap-6 md:gap-10 max-w-4xl w-full"
        role="presentation"
      >
        <h2
          className="font-raleway text-2xl sm:text-3xl lg:text-[36px] font-light italic leading-normal text-charcoal-950"
          aria-label="Greeting"
        >
          Hi, I am Nel,
        </h2>

        <h1
          className="text-center font-raleway text-3xl sm:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-none text-charcoal-950"
          aria-label="Professional title"
        >
          <span className="block">Frontend Engineer +</span>
          <span className="block">Programming mentor</span>
        </h1>

        <div className="relative w-full max-w-md aspect-square">
          <Image
            src={Nel}
            alt="Nel's professional avatar showing blockchain developer and programming mentor"
            priority
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            aria-hidden="false"
          />
        </div>
        <CVButton />
      </div>
    </section>
  );
}
