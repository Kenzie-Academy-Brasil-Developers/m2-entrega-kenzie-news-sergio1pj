export class ApiRequests {
    static baseUrl = "https://kenzie-news-api.herokuapp.com/api/news";
    static async getAllNews() {
        const news = await fetch(this.baseUrl, {
            method: "GET",
            headers: {  "Content-Type": "application/json"  },
        })
        .then(res => res.json())
        .catch(err => console.log(err));
        return news;
    }
}
