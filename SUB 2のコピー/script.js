const form = document.querySelector("form");
const posts = document.querySelector("#posts");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const postContent = document.querySelector('input[name="post"]').value;

  // 投稿データを作成
  const post = {
    content: postContent,
    time: new Date().toLocaleString(),
  };

  // 投稿データを画面に表示
  const postElement = createPostElement(post);
  posts.appendChild(postElement);

  // 入力欄をクリア
  document.querySelector('input[name="post"]').value = "";
});

const imageInput = document.querySelector('input[name="image"]');
const previewImage = document.querySelector("#preview-image");

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    previewImage.src = reader.result;
  };

  reader.readAsDataURL(file);
});

// 投稿処理
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // 画像データを取得
  const imageData = previewImage.src;

  // 投稿データを作成
  const post = {
    image: imageData,
    time: new Date().toLocaleString(),
  };

  // 投稿データを画面に表示
  const postElement = createPostElement(post);
  posts.appendChild(postElement);
});

function createPostElement(post) {
  const element = document.createElement("div");
  element.classList.add("post");

  // 全体を囲む要素を作成
  const postContainer = document.createElement("div");
  postContainer.classList.add("post-container"); // 新しいクラスを追加

  // 画像部分を作成
  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  imageElement.classList.add("post-image");

  // 画像をコンテナ要素に追加
  postContainer.appendChild(imageElement);

  // コンテナ要素を親要素に追加
  element.appendChild(postContainer);

  return element;
}

function drawText() {
  const canvas = document.getElementById("text-canvas");
  const ctx = canvas.getContext("2d");
  const text = document.getElementById("text-input").value;
  

  // キャンバスのサイズを画像と同じに設定
  canvas.width = document.getElementsByClassName("post-image").width;
  canvas.height = document.getElementsByClassName("post-image").height;

  // 画像を描画
  const img = document.getElementsByClassName("post-image");
  ctx.drawImage(img, 0, 0);

  // テキストを描画
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, canvas.height - 20);

  // 画像のsrcに変換したデータURLを設定
  //const dataURL = canvas.toDataURL();
  //document.getElementById('output-image').src = dataURL;
}

const imageInputimage = document.querySelector('input[name="image"]');

imageInputimage.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    // 画像データURLを取得
    const imageDataURL = reader.result;
  };

  reader.readAsDataURL(file);
});
