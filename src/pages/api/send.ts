import { establishNextApi } from "next-bridge";
import { sendDataContext } from "@handlers/init";
import { sendDataAction } from "@handlers/action";

const api = establishNextApi("POST", sendDataContext.init(sendDataAction));

export default api;
