import type { NextPage } from "next";
import Head from "next/head";
import Kratong from "@map/kratong";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ลอยกระทงออนไลน์ lol</title>
        <meta name="description" content="ลอยกระทงออนไลน์" />
      </Head>
      <main className="main">
        <div className="kratong">
          <img className="flower" src={Kratong.flowers[0].url} alt={Kratong.flowers[0].name} />
          <img className="base" src={Kratong.base[0].url} alt={Kratong.base[0].name} />
          <img className="decorations" src={Kratong.decorations[0].url} alt={Kratong.decorations[0].name} />
        </div>
      </main>
    </>
  );
};

export default Home;
