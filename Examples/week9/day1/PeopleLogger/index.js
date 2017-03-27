import store from "./store"

import {getPeopleAsync} from "./store"

store.dispatch(getPeopleAsync(() => console.log(store.getState())))