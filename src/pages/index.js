import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">The Open-Source Smart RV Ecosystem</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Discover the Ecosystem
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Smart RV Ecosystem`}
      description="Connect your RV and van systems into Home Assistant with open-source ESP32 hardware.">
      <HomepageHeader />
      <main>
        <div className="container" style={{ padding: '4rem 0' }}>
          <div className="row">
            <div className="col col--4" style={{ textAlign: 'center', padding: '2rem' }}>
              <Heading as="h3">Break the Vendor Lock-in</Heading>
              <p>Stop relying on isolated apps for Victron, Autoterm, and water sensors. We build the hardware bridge to unify your systems.</p>
            </div>
            <div className="col col--4" style={{ textAlign: 'center', padding: '2rem' }}>
              <Heading as="h3">Home Assistant Native</Heading>
              <p>Powered by the ESP32-C6 and ESPHome, every ConnectedVan module instantly integrates into your local Home Assistant server.</p>
            </div>
            <div className="col col--4" style={{ textAlign: 'center', padding: '2rem' }}>
              <Heading as="h3">Modular & Open-Source</Heading>
              <p>Build your system piece by piece. Start with the Autoterm Heater module, add a Battery Shunt later, and control it all from one dashboard.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}