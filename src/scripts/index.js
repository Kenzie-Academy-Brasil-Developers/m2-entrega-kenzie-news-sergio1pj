import { ApiRequests } from "./requests.js";
import { Render } from "./render.js";
const news =  await ApiRequests.getAllNews();
const sectionNews = document.querySelector("main");
sectionNews.appendChild(Render.renderNewsList(news));

