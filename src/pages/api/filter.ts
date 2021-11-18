import {establishNextApi} from "next-bridge";
import {loadSceneContext} from "../../bridges/scene/init";
import {loadSceneAction} from "../../bridges/scene/actions/loadSceneAction";
import {loadListContext, updateListContext} from "../../bridges/filter/init";
import {loadListAction} from "../../bridges/filter/action/loadList";
import {updateListAction} from "../../bridges/filter/action/updateList";

const api = establishNextApi("POST", [loadListContext.init(loadListAction), updateListContext.init(updateListAction)]);

export default api;
