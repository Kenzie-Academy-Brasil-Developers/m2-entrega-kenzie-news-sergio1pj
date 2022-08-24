import { ApiRequests } from "./requests.js";
import { Render } from "./render.js";
const news =  await ApiRequests.getAllNews();
console.log(news)
const sectionNews = document.querySelector(".news");
const top = document.querySelector(".top");
top.appendChild(Render.renderNewsList(news.filter(item => item.id === 3)));
sectionNews.appendChild(Render.renderNewsList(news));

