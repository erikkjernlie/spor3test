import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="SPOR 3 Sandnes interiør"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="flex max-w-[770px] flex-col items-center text-center" style={{ perspective: "2000px" }}>
        <Image
          src="/images/logo-spor3.png"
          alt="SPOR 3 logo"
          width={200}
          height={100}
          className="mb-8 max-h-[100px] w-auto"
          priority
        />

        <p className="mb-10 max-w-[500px] font-mono text-sm leading-relaxed text-white/90">
          En lun og folkelig bar i hjertet av Sandnes sentrum. Vi serverer gode
          drinker fra proffe bartendere og mat fra à la carte meny til moderate
          priser. Utesevering med varmeovner.
        </p>

        <div className="flex max-w-[300px] gap-2">
          <Link
            href="https://cdn.prod.website-files.com/63a2161950ebce0ce95268f9/6985d7bce3b0bcfd13203048_meny2026%20korrektur2.pdf"
            target="_blank"
            className="rounded bg-gold px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-gold/80"
          >
            Meny
          </Link>
          <Link
            href="https://spor3sandnes.no/booking"
            target="_blank"
            className="rounded border-2 border-white px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Book bord
          </Link>
        </div>
      </div>
    </section>
  );
}
