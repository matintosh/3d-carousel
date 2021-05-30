import { useState } from "react";
import Head from "next/head";
import { Carousel, Ship, Indicator } from "../src/components";
import styles from "../styles/Home.module.css";

const shipsList = [
  {
    image: "/images/ship_1.png",
  },
  {
    image: "/images/ship_2.png",
  },
  {
    image: "/images/ship_3.png",
  },
  {
    image: "/images/ship_4.png",
  },
  {
    image: "/images/ship_5.png",
  },
  {
    image: "/images/ship_6.png",
  },
  {
    image: "/images/ship_7.png",
  },
  {
    image: "/images/ship_1.png",
  },
];

export default function Home() {
  const [activeShip, setActiveShip] = useState(0);

  const handleActiveShip = (n) => setActiveShip(n);

  const ShipsUI = shipsList.map((i, idx) => {
    return (
      <Ship
        active={(activeShip === 8 ? 0 : activeShip) === idx}
        image={i.image}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a className="title-link" href="https://nextjs.org">
            BacklotShips
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <Carousel items={ShipsUI} onChange={handleActiveShip} />
      <div style={{ width: '100%', margin: "50px 0"}}>
        <Indicator
          length={ShipsUI.length}
          current={activeShip}
          inverted={true}
        />
      </div>
      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="BLC Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
