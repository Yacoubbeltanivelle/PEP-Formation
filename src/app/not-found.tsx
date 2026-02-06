import Link from "next/link";
import Image from "next/image";

// Préfixe pour les assets statiques (GitHub Pages)
const basePath = process.env.NODE_ENV === "production" ? "/PEP-Formation" : "";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      {/* Header minimal */}
      <header className="py-6 px-8">
        <Link
          href="/fr"
          className="inline-flex items-center gap-2 text-graphite hover:text-pep-orange transition-colors"
        >
          <span className="text-xl font-bold font-heading">PEP FORMATIONS</span>
        </Link>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          {/* Illustration 404 */}
          <div className="mb-8">
            <Image
              src={`${basePath}/images/error-404.png`}
              alt="Page introuvable - Illustration"
              width={280}
              height={280}
              className="mx-auto"
              priority
            />
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-graphite mb-4">
            Page introuvable
          </h1>
          <p className="text-graphite/60 text-lg mb-8 leading-relaxed">
            Oups ! La page que vous cherchez n&apos;existe pas ou a été
            déplacée.
          </p>

          {/* Divider signature */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pep-orange via-pep-mint to-pep-violet rounded-full mb-8" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fr"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/fr/catalogue"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Voir nos formations
            </Link>
          </div>

          {/* Contact d aide */}
          <p className="mt-12 text-sm text-graphite/50">
            Besoin d&apos;aide ?{" "}
            <Link
              href="/fr/contact"
              className="text-pep-orange hover:underline"
            >
              Contactez-nous
            </Link>
          </p>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="py-6 text-center text-sm text-graphite/40">
        © {new Date().getFullYear()} PEP Formations
      </footer>
    </div>
  );
}
