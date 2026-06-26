import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import siteConfig from '../data/siteConfig'

export default function Terms() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions" />
      <section className="section-pad bg-skyback">
        <Container className="max-w-3xl space-y-5 px-4 text-[15px] leading-relaxed text-primary-600 sm:px-6 lg:px-8">
          <p>
            This is placeholder terms-and-conditions copy for the {siteConfig.brandName} {siteConfig.brandSuffix}
            demo site. Replace with your organisation's reviewed terms before going live.
          </p>
          <h2 className="text-xl font-bold text-primary-900">Use of This Website</h2>
          <p>Outline acceptable use of the website and its content.</p>
          <h2 className="text-xl font-bold text-primary-900">Admissions Terms</h2>
          <p>Reference your formal admissions agreement and fee policies here.</p>
          <h2 className="text-xl font-bold text-primary-900">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent-dark hover:underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
