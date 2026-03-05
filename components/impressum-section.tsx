"use client"

import { useLanguage } from "@/components/language-provider"
import { impressumData } from "@/lib/impressum-data"

export function ImpressumSection() {
  const { locale } = useLanguage()
  const addr = impressumData.address

  // German version is legally binding; English is for convenience
  if (locale === "de") {
    return (
      <section className="px-6 lg:px-12 py-24 lg:py-32" aria-label="Impressum">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-5xl text-content tracking-tight mb-12">
            Impressum
          </h1>
          <p className="text-xs text-muted-foreground mb-8">
            Angaben gemäß § 5 des Gesetzes über digitale Dienste (DDG) /
            Informationspflichten gemäß Art. 13 EU-Verordnung 2022/2065
          </p>

          <div className="space-y-8 text-content">
            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Verantwortlich für den Inhalt
              </h2>
              <p className="font-semibold">{impressumData.companyName}</p>
              <p className="text-muted-foreground">{impressumData.legalForm}</p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Anschrift
              </h2>
              <p>
                {addr.street}
                <br />
                {addr.postalCode} {addr.city}
                <br />
                {addr.country}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Vertreten durch
              </h2>
              <p>
                {impressumData.representatives.join(", ")}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a href={`tel:${impressumData.contact.phone.replace(/\s/g, "")}`} className="text-terracotta hover:underline">
                  {impressumData.contact.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${impressumData.contact.email}`} className="text-terracotta hover:underline">
                  {impressumData.contact.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Registereintrag
              </h2>
              <p>
                Registergericht: {impressumData.registerCourt}
                <br />
                Handelsregisternummer: {impressumData.commercialRegisterNumber}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
                {impressumData.vatId}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                EU-Streitschlichtung
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // English version (informational)
  return (
    <section className="px-6 lg:px-12 py-24 lg:py-32" aria-label="Legal Notice">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl text-content tracking-tight mb-12">
          Legal Notice / Impressum
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Information according to § 5 German Digital Services Act (DDG)
        </p>

        <div className="space-y-8 text-content">
          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Responsible for content
            </h2>
            <p className="font-semibold">{impressumData.companyName}</p>
            <p className="text-muted-foreground">{impressumData.legalForm}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Address
            </h2>
            <p>
              {addr.street}
              <br />
              {addr.postalCode} {addr.city}
              <br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Represented by
            </h2>
            <p>
              {impressumData.representatives.join(", ")}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Contact
            </h2>
            <p>
              Phone:{" "}
              <a href={`tel:${impressumData.contact.phone.replace(/\s/g, "")}`} className="text-terracotta hover:underline">
                {impressumData.contact.phone}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${impressumData.contact.email}`} className="text-terracotta hover:underline">
                {impressumData.contact.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Commercial register
            </h2>
            <p>
              Register court: {impressumData.registerCourt}
              <br />
              Registration number: {impressumData.commercialRegisterNumber}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
              VAT ID
            </h2>
            <p>
              VAT identification number: {impressumData.vatId}
            </p>
          </div>

          <p className="text-muted-foreground text-sm pt-8">
            For the full legally binding Impressum in German, please switch to German (DE) in the language selector.
          </p>
        </div>
      </div>
    </section>
  )
}
