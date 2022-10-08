import Head from "next/head";
import {
  Header,
  Hero,
  Footer,
  About,
  Action,
  Faq,
  Monteno,
  Newsletter,
  Partners,
  Portfolio,
  RoadMap,
  Speciality,
  Team,
  Testimonial,
} from "../app/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monteno - NFT Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/favicon.png"
        />
      </Head>
      {/* <div class="preloader">
        <div class="icon"></div>
      </div> */}

      <Header />
      <Hero />
      <About />
      <Speciality />
      <Portfolio />
      <RoadMap />
      <Team />
      <Partners />
      <Testimonial />
      <Faq />
      <Action />
      <Newsletter />
      <Monteno />
      <Footer />
    </div>
  );
}
