import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-black px-6 py-8">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Image
          src="/images/footer-logo.jpg"
          alt="SPOR 3"
          width={120}
          height={60}
          className="opacity-90"
        />
      </Link>
    </footer>
  );
}
