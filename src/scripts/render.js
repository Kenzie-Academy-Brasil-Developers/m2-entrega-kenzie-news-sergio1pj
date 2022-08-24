export class Render {
  static renderNewsList(array) {
    const tagUl = document.createElement("ul");
    array.forEach(function(news){
      const tagLi = Render.renderCard(news);
      tagUl.append(tagLi);
    });
    tagUl.classList.add("container");
    return tagUl;
  }
  static renderCard(news) {
    const tagLi = document.createElement("li");
    const tagImg = document.createElement("img");
    const tagH2 = document.createElement("h2");
    const tagH4 = document.createElement("h4");
    const tagDivH4 = document.createElement("div");
    const tagP = document.createElement("p");
    const tagSpan = document.createElement("span");
    const tagDiv = document.createElement("div");
    tagImg.src = news.imagem;
    tagH4.innerText = news.categoria;
    tagH2.innerText = news.titulo;
    tagP.innerText = news.resumo;
    tagSpan.innerText = `fonte: ${news.fonte}`;
    tagDivH4.append(tagH4);
    tagDivH4.classList.add("category");
    tagDiv.append(tagDivH4, tagH2, tagP, tagSpan);
    tagLi.append(tagImg, tagDiv);
    tagLi.classList.add("container__item");
    return tagLi
  }
}

