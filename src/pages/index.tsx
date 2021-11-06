import type { NextPage } from "next";
import Head from "next/head";
import { Kratong, KratongNormalPartType, KratongVariantPartType } from "@map/kratong";
import Image from "next/image";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
}

const KratongNormalPart: NextPage<KratongNormalPartProps> = ({ part }) => {
  return (
    <div className="container">
      <img className="img" src={part.url} alt={part.name} />
    </div>
  );
};
interface KratongVariantPartProps {
  part: KratongVariantPartType;
}

const KratongVariantPart: NextPage<KratongVariantPartProps> = ({ part }) => {
  return (
    <div className="container">
      <img className="img" src={part.variants[0]} alt={part.name} />
    </div>
  );
};

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
            <KratongNormalPart part={Kratong.flowers["study"]} />
            <KratongNormalPart part={Kratong.flowers["love"]} />
          </div>
          <div className="base">
            <KratongNormalPart part={Kratong.base["coconut-shell"]} />
            <KratongNormalPart part={Kratong.base["banana-leaf"]} />
          </div>
          <div className="decorations">
            <KratongNormalPart part={Kratong.decorations["nak"]} />
            <KratongNormalPart part={Kratong.decorations["swan"]} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
