import { ApiRequests } from "./requests.js";
import { Render } from "./render.js";
const news =  await ApiRequests.getAllNews();
const main = document.querySelector("main");
main.append(Render.renderNewsList(news));

