const API_KEY = "5ca19004f97f4f5f9d74d0fbb95b21dc";
let newsList = [];
const menus = document.querySelectorAll(".menus button");




menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByCategory(event))
);

let url = new URL(
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
);

let totalResults = 0;
let page = 1;
const pageSize = 5;

const getNews = async () => {
  try {
    url.searchParams.set("page", page);
    url.searchParams.set("pageSize", pageSize);
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log("da", data.articles.length);
    console.log("d4", data);
    if (response.status == 200) {
      if (data.articles.length === 0) {
        throw new Error("No result for this search");
      }
      newsList = data.articles;
      totalResults = data.totalResults;
      console.log("ddd", data);
      render();
      pageNationRender();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    errorRender(error.message);
  }
};

const getLatestNews = async () => {
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  getNews();
};

const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  getNews();
};

const getNextByKeyword = async () => {
  const keyword = document.getElementById("search-input").value;
  console.log("key", keyword);
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`
  );
  getNews();
};

const render = () => {
  let newsHtml = "";
  newsHtml = newsList
    .map(
      (
        news
      ) => `<div class="row" style="padding: 10px; border-bottom: 4px double black;">
          <div class="col-lg-4">
            <img class="news-img-size" src="${news.urlToImage}" alt="#">
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <div>${news.source.name} * ${news.publishedAt}</div> 
          </div>
        </div>`
    )
    .join("");
  document.getElementById("news-board").innerHTML = newsHtml;
};

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">
    ${errorMessage}
  </div>`;

  document.getElementById("news-board").innerHTML = errorHTML;
};

const pageNationRender = () => {
  
  const totalPages = Math.ceil(totalResults / pageSize);
  const groupSize = 5;
  const pageGroup = Math.ceil(page / groupSize);
  let lastPage = pageGroup * groupSize;
  const firstPage = lastPage - (groupSize - 1) <= 0? 1 : lastPage - (groupSize - 1);
  let pageNationHTML = "";

  if(page >1){
  pageNationHTML += `<li class="page-item" onclick="moveToPage(${1})"><a class="page-link"><<</a></li>`
  pageNationHTML += `<li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link"><</a></li>`;
  }
  
if (lastPage > totalPages) {
  lastPage = totalPages;
}
  

  for (let i = firstPage; i <= lastPage; i++) {
    pageNationHTML += `<li class="page-item ${i===page?'active':""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`;
  }
  
  if(page < totalPages){
    pageNationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link">></a></li>`
    pageNationHTML += `<li class="page-item" onclick="moveToPage(${totalPages})"><a class="page-link">>></a></li>`
  }
  
  document.querySelector(".pagination").innerHTML = pageNationHTML;
};

const moveToPage = (pageNum) => {
  if(page === pageNum) return
  console.log("move", pageNum);
  page = pageNum;
  getNews();
};

getLatestNews();

//클릭 이벤트
//카테고리별 뉴스 가져오기
//그 뉴스를 랜더
