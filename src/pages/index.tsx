import type { NextPage } from "next";
import Head from "next/head";
import { Kratong } from "@map/kratong";
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
          <img className="flower" src={Kratong.flowers["love"].url} alt={Kratong.flowers["love"].name} />
          <img className="base" src={Kratong.base["banana-leaf"].url} alt={Kratong.base["banana-leaf"].name} />
          <img className="decorations" src={Kratong.decorations["nak"].url} alt={Kratong.decorations["nak"].name} />
        </div>
      </main>
    </>
  );
};

export default Home;
