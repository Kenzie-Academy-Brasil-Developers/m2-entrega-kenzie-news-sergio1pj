export class Render {
    static renderNewsList(array) {
      const tagUl = document.createElement("ul");
      array.forEach(function(news){
        const tagLi = Render.renderCard(news);
        tagUl.append(tagLi);
      });
      tagUl.classList.add("news__container");
      return tagUl;
    }
    static renderCard(news) {
      const tagLi = document.createElement("li");
      const tagImg = document.createElement("img");
      const tagH2 = document.createElement("h2");
      const tagH4 = document.createElement("h4");
      const tagP = document.createElement("p");
      const tagSpan = document.createElement("span");
      const tagDiv = document.createElement("div");
      tagImg.src = news.imagem;
      tagH4.innerText = news.categoria;
      tagH2.innerText = news.titulo;
      tagP.innerText = news.resumo;
      tagSpan.innerText = `fonte: ${news.fonte}`;
      tagDiv.append(tagH4, tagH2, tagP, tagSpan);
      tagLi.append(tagImg, tagDiv);
      tagLi.classList.add("news__container__item");
      return tagLi
    }
  }
