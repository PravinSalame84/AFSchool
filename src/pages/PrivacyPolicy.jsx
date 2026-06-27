import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import siteConfig from '../data/siteConfig'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description={`Privacy policy information for ${siteConfig.brandName}, ${siteConfig.brandSuffix}.`} path="/privacy-policy" />
      <PageHero crumb="Privacy Policy" title="Privacy Policy" />
      <section className="section-pad">
        <Container className="max-w-3xl space-y-5 px-4 text-[15px] leading-relaxed text-primary-600 dark:text-slate-300 sm:px-6 lg:px-8">
          <p>
            This is placeholder privacy-policy copy for the {siteConfig.brandName} {siteConfig.brandSuffix} demo
            site. Replace this page with your organisation&apos;s reviewed, legally-approved privacy policy before
            going live.
          </p>
          <h2 className="text-xl font-bold text-primary-900 dark:text-white">Information We Collect</h2>
          <p>
            Describe what personal data is collected through forms on this site (e.g. enquiry forms, contact
            forms) and why.
          </p>
          <h2 className="text-xl font-bold text-primary-900 dark:text-white">How We Use Your Information</h2>
          <p>Explain how submitted data is used, for example, to respond to admissions enquiries.</p>
          <h2 className="text-xl font-bold text-primary-900 dark:text-white">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-accent-dark hover:underline dark:text-accent">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
