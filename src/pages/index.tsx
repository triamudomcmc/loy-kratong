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
      <main>
        <div className="kratong">
          <div className="flowers">
            <img className="img" src={Kratong.flowers["love"].url} alt={Kratong.flowers["love"].name} />
            <button className="p-4 rounded-full border border-gray-500">Change</button>
          </div>
          <div className="base">
            <img className="img" src={Kratong.base["banana-leaf"].url} alt={Kratong.base["banana-leaf"].name} />
            <button className="p-4 rounded-full border border-gray-500">Change</button>
          </div>
          <div className="decorations">
            <img className="img" src={Kratong.decorations["nak"].url} alt={Kratong.decorations["nak"].name} />
            <button className="p-4 rounded-full border border-gray-500">Change</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
