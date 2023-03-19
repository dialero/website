import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Carousel from 'nuka-carousel';
import { Button, Card, Col, Container, Grid, Row, Spacer, Text } from '@nextui-org/react';

import {
  BiCheck,
  BiX,
  BiVoicemail,
  BiTimer,
  BiSupport,
  BiMobile,
  BiAddToQueue,
  BiEdit,
  BiMessage,
  BiUserPlus,
  BiMask,
  BiSlider,
  BiGlobe,
  BiCloud,
} from 'react-icons/bi';
import LeadForm from '../components/Forms/LeadForm';

const AppExchangeListingUrl =
  'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EcrVeUAJ';

const featureIconStyle = {
  mh: 32,
};
const featureItems = [
  {
    title: 'Call recordings and voicemail',
    description:
      'Capture the voice recordings of all calls to provide better calls quality and agents training',
    icon: <BiVoicemail size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Click on any Lead or Contact to dial instantly',
    description:
      'Forget wasting time on manual dialing, all you need to connect with a customer instantly is a click',
    // icon: <ThunderboltTwoTone style={featureIconStyle} />,
    icon: <BiTimer size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Route inbound calls directly to Salesforce user',
    description: 'Redirect inbound calls directly to relevant agent or designated agent of choice',
    // icon: <ApiTwoTone style={featureIconStyle} />,
    icon: <BiSupport size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Forward inbound calls to physical phone',
    description: "Don't miss any calls and redirect them to any physical phone of your choice",
    // icon: <MobileTwoTone style={featureIconStyle} />,
    icon: <BiMobile size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Queue inbound callers',
    description: 'Provide better customer service or hotline and queue callers',
    // icon: <FunnelPlotTwoTone style={featureIconStyle} />,
    icon: <BiAddToQueue size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Record detailed history while speaking with customers',
    description: 'Type summary of your convesation comments while you talk to a customer',
    // icon: <EditTwoTone style={featureIconStyle} />,
    icon: <BiEdit size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'SMS',
    description:
      'Connect with your customers by sending and receiving text messages instantly from any Lead or Contact',
    // icon: <MessageTwoTone style={featureIconStyle} />,
    icon: <BiMessage size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Convert callers to Leads or Contacts during the call',
    description:
      'Save time and work while you speak, convert anonymous callers into prospects with ease',
    // icon: <StarTwoTone style={featureIconStyle} />,
    icon: <BiUserPlus size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Outbound calls number masking',
    description: 'Display any verified number as your outbound caller Id',
    // icon: <BulbTwoTone style={featureIconStyle} />,
    icon: <BiMask size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Manage Twilio settings directly from Salesforce',
    description:
      'Search, buy and edit Twilio phone numbers, verify or remove Caller Ids directly from Dialero settings page',
    // icon: <SettingTwoTone style={featureIconStyle} />,
    icon: <BiSlider size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: 'Make international outbound calls',
    description: 'Reach out to customers in 150+ countries worldwide',
    // icon: <FireTwoTone style={featureIconStyle} />,
    icon: <BiGlobe size={32} color="var(--ifm-color-primary)" />,
  },
  {
    title: '100% Salesforce Native',
    description:
      'Take advantage of Salesforce platform, monitor agents performance with native reports, get alerts and much more',
    // icon: <CloudTwoTone style={featureIconStyle} />,
    icon: <BiCloud size={32} color="var(--ifm-color-primary)" />,
  },
];

const pricingLiteItems = [
  {
    text: 'International Outbound Calls',
    available: true,
  },
  {
    text: 'One-On-One SMS',
    available: true,
  },
  {
    text: 'Instantly Convert Callers To Leads/Contacts',
    available: true,
  },
  {
    text: 'Standard Inbound Capabilities',
    available: true,
  },
  {
    text: 'Manage Up to 2 Twilio Phones',
    available: true,
  },
  {
    text: 'Call Recordings And Voicemail',
    available: false,
  },
  {
    text: 'Outbound Calls Number Masking',
    available: false,
  },
  {
    text: 'Automated SMS',
    available: false,
  },
  {
    text: 'Inbound Queues',
    available: false,
  },
];

const pricingProItems = [
  {
    text: 'International Outbound Calls',
    available: true,
  },
  {
    text: 'One-On-One SMS',
    available: true,
  },
  {
    text: 'Instantly Convert Callers To Leads/Contacts',
    available: true,
  },
  {
    text: 'Standard Inbound Capabilities',
    available: true,
  },
  {
    text: (
      <>
        <Text b>Manage Unlimited</Text> Twilio Phones
      </>
    ),
    available: true,
  },
  {
    text: 'Call Recordings And Voicemail',
    available: true,
  },
  {
    text: 'Outbound Calls Number Masking',
    available: true,
  },
  {
    text: 'Automated SMS',
    available: true,
  },
  {
    text: 'Inbound Queues',
    available: true,
  },
];

function PricingItem({ item }) {
  return (
    <>
      <Row>
        <Col css={{ mw: 32 }}>
          {item.available ? (
            <BiCheck size={24} fill="var(--ifm-color-primary)" />
          ) : (
            <BiX size={24} fill="var(--ifm-color-secondary)" />
          )}
        </Col>
        <Col css={{ flexGrow: 1, alignItems: 'center' }}>{item.text}</Col>
      </Row>
    </>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <div className={styles.heroTitleContainer}>
              <h1 className={clsx('margin-bottom--lg', styles.heroTitle)}>
                Take your business to the next level <br />
                with <b>Dialero</b>,<br /> a <b>native softphone</b> for <b>Salesforce</b>.
              </h1>
              <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  TRY IT FOR FREE
                </Link>
              </div>
            </div>
            {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
            {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          </div>
          <div className="col col--7">
            <div className={styles.browserMockup}>
              <Carousel
                autoplay={true}
                autoplayInterval={4000}
                // autoplayReverse={true}
                // animation="zoom"
                className={styles.slideshow}
                speed={2000}
                wrapAround={true}
                withoutControls={true}
                pauseOnHover={false}>
                <img src="img/screenshot-main.png" />
                <img src="img/screenshot-call-log.png" />
                <img src="img/screenshot-queues.png" />
              </Carousel>
            </div>
            {/* <div className={styles.browserMockup}>
              <img src="img/screenshot-main.png" />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Native Telephony & SMS Solution For Salesforce"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        {/* Features */}
        <div id="features" className="container padding-top--xl margin-bottom--xl">
          <Container>
            <Grid.Container gap={2} justify="center">
              {featureItems.map((item, i) => (
                <Grid xs={6} key={i}>
                  <Row css={{ alignItems: 'center' }}>
                    <Col css={{ mw: 32 }}>{item.icon}</Col>
                    <Spacer x={1} />
                    <Col>
                      <Text b weight="semibold">
                        {item.title}
                      </Text>
                      <Text>{item.description} </Text>
                    </Col>
                  </Row>
                </Grid>
              ))}
            </Grid.Container>
          </Container>
        </div>
        {/* Pricing */}
        <div id="pricing" className="container padding-top--xl margin-bottom--xl">
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={6}>
              <Card isHoverable>
                <Card.Header>
                  <Container direction="column" style={{ textAlign: 'center' }}>
                    <Text as="h2" transform="uppercase" weight="bold" color="#bd1550" size={24}>
                      Lite Edition
                    </Text>
                    <Row justify="center" align="baseline">
                      <Text>$</Text>
                      <Spacer x={0.25} />
                      <Text h2 size={46} weight="semibold">
                        15
                      </Text>
                      <Spacer x={0.25} />
                      <Text small> user/month</Text>
                    </Row>
                  </Container>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Container>
                    {pricingLiteItems.map((item, i) => (
                      <PricingItem item={item} key={i} />
                    ))}
                  </Container>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Button
                    shadow
                    color="gradient"
                    size="lg"
                    style={{ width: '100%' }}
                    css={{ m: 10 }}
                    onPress={() => window.open(AppExchangeListingUrl, '_blank')}>
                    <Text color="white" transform="uppercase">
                      Free Trial On AppExchange
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card isHoverable borderWeight="light" color="#bd1550">
                <Card.Header>
                  <Container direction="column" style={{ textAlign: 'center' }}>
                    <Text as="h2" transform="uppercase" weight="bold" color="#bd1550" size={24}>
                      Pro Edition
                    </Text>
                    <Row justify="center" align="baseline">
                      <Text>$</Text>
                      <Spacer x={0.25} />
                      <Text h2 size={46} weight="semibold">
                        30
                      </Text>
                      <Spacer x={0.25} />
                      <Text small> user/month</Text>
                    </Row>
                  </Container>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Container>
                    {pricingProItems.map((item, i) => (
                      <PricingItem item={item} key={i} />
                    ))}
                  </Container>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Button
                    shadow
                    color="gradient"
                    size="lg"
                    style={{ width: '100%' }}
                    css={{ m: 10 }}
                    onPress={() => window.open(AppExchangeListingUrl, '_blank')}>
                    <Text color="white" transform="uppercase">
                      Free Trial On AppExchange
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
        {/* Contact */}
        <div id="contact" className="container padding-top--xl margin-bottom--xl">
          <Grid>
            <Row justify="center">
              <Col css={{ mw: 370 }}>
                <LeadForm />
              </Col>
            </Row>
          </Grid>
        </div>
      </main>
    </Layout>
  );
}
