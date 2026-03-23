"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function OpeningHours() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-overlay-heavy px-6 py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <FadeIn direction="up" delay={0}>
        <h2 className="mb-5 font-sans text-2xl font-semibold leading-9 text-white">
          ÅPNINGSTIDER
        </h2>
      </FadeIn>

      <Stagger staggerDelay={0.15} className="flex flex-col items-center">
        <StaggerItem>
          <p className="mb-4 font-sans text-base font-semibold text-gold">
            BAR
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="max-w-[500px] text-center font-mono text-sm leading-relaxed text-white">
            Man-Tors: &nbsp;&nbsp;&nbsp;&nbsp;17.00-00.30
            <br />
            Fredag: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.00-00.30
            <br />
            Lør:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13.00-00.30
            <br />
            Søn:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.00-00.30
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-6 mb-4 font-sans text-base font-semibold text-gold">
            KJØKKEN
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="max-w-[500px] text-center font-mono text-sm leading-relaxed text-white">
            Man-Tirs:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stengt
            <br />
            Ons-Tors: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17.00-21.00
            <br />
            Fre-Søn:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.00-21.00
          </p>
        </StaggerItem>

        <StaggerItem>
          <Link
            href="https://www.facebook.com/SPOR3Sandnes/"
            target="_blank"
            className="mt-10 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:opacity-80"
          >
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="opacity-80"
            />
            <p className="max-w-[250px] text-center font-mono text-sm text-white/80">
              Se vår Facebook-side for oppdateringer og nyheter
            </p>
          </Link>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
