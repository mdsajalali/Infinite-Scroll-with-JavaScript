const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );

  //   console.log(response);

  const data = await response.json(); 
  //   console.log(data);

  data.map((curElm) => {
    const htmlData = `
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curElm.title}</h2>
        <p class="post-info">${curElm.body}</p>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmlData);
  });
};
getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 100);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("I am at bottom");
    showData();
  }
});

// TOP BTN
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) $(".gotopbtn").addClass("active");
  else $(".gotopbtn").removeClass("active");
});

$(".gotopbtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});
