import { establishNextApi } from "next-bridge";
import { loadDataContext, sendDataContext } from "@handlers/init";
import { loadDataAction, sendDataAction } from "@handlers/action";

const api = establishNextApi("POST", [sendDataContext.init(sendDataAction), loadDataContext.init(loadDataAction)]);

export default api;
