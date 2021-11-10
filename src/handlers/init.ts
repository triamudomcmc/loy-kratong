import { BridgeContext, createBridgeContext } from "next-bridge";
import { ResultData } from "@components/Kratong/create";
import { ResultData as PResultData } from "@components/Principal/create";
import { PSAResultData } from "@pages/cupsa";

export const sendDataContext: BridgeContext<{ id: string; data: ResultData | PResultData | PSAResultData }> =
  createBridgeContext("sendData", "send");
