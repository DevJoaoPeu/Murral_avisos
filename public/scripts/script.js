document.addEventListener("DOMContentLoaded", () => {
  updatePost();
});

function updatePost() {
  const fetchUrl = async () => {
    const url = "http://localhost:3000/api/all";
    const res = await fetch(url);
    const data = await res.json();

    const posts = JSON.parse(data);
    let elements = "";

    posts.forEach((post) => {
      const postElement = `<div id=${post.id} class="card mb-4">
        <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
    </div>`;

      elements += postElement;
    });
    document.querySelector("#posts").innerHTML = elements;
  };
  fetchUrl();
}

function newPost() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;

  const posts = { title, description };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(posts),
  };

  fetch("http://localhost:3000/api/new", options).then((res) => {
    title.innerHTML = "";
    description.innerHTML = "";
    updatePost();
  });
}
