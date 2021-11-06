import type {NextPage} from "next";
import Head from "next/head";
import {Kratong, KratongNormalPartType, KratongVariantPartType} from "@map/kratong";

interface KratongNormalPartProps {
  part: KratongNormalPartType;
}

const KratongNormalPart: NextPage<KratongNormalPartProps> = ({part}) => {
  return (
    <div className="container">
      <img className="img" src={part.url} alt={part.name}/>
    </div>
  );
};

const Candle: NextPage<KratongNormalPartProps> = ({part}) => {
  return (
    <div className="container">
      <img className="img" src={part.url} alt={part.name}/>
    </div>
  );
};

interface KratongVariantPartProps {
  part: KratongVariantPartType;
}

const KratongVariantPart: NextPage<KratongVariantPartProps> = ({part}) => {
  return (
    <div className="container">
      <img className="img" src={part.variants[0]} alt={part.name}/>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ลอยกระทงออนไลน์ lol</title>
        <meta name="description" content="ลอยกระทงออนไลน์"/>
      </Head>
      <main>
        <div style={{["--size" as string]: "300px", backgroundColor: "gray"}} className="kratong">
          <div className="topping">
            <div style={{["--offset-y" as string]: "100px"}} className="decorations">
              <KratongVariantPart part={Kratong.decorations.sign["want-money"]}/>
              {/*<KratongVariantPart part={Kratong.decorations.sign.quote}/>*/}
            </div>
            <div className="candle">
              <KratongVariantPart part={Kratong.other.candles}/>
            </div>
          </div>
          <div className="base">
            <div className="flowers">
              {/*<KratongNormalPart part={Kratong.flowers["cactus"]} />*/}
              <KratongNormalPart part={Kratong.flowers.love}/>
            </div>
            <div className="shell">
              {/*<KratongNormalPart part={Kratong.base["coconut-shell"]} />*/}
              <KratongNormalPart part={Kratong.base["banana-leaf"]}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
