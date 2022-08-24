import { ApiRequests } from "./requests.js";
import { Render } from "./render.js";
const news =  await ApiRequests.getAllNews();
const body = document.querySelector("body");
body.append(Render.renderNewsList(news));

