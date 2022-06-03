const chatForm = document.querySelector(".feeds-chating");
const likeBtn = document.querySelector("button");
const heartBtn = likeBtn.querySelectorAll("i")[1];
const likeDelete = likeBtn.querySelectorAll("i")[0];
const bigHeartIcon = document.querySelector(".big-heart");

bigHeartIcon.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-solid");
});

function handleChatSubmit(event) {
  event.preventDefault();
  const chatScreen = document.querySelector(".feeds-like__chat-screen");
  const chatInput = document.querySelector(".feeds-chating-input");
  const chatFriends = document.querySelector(".feeds-like__chat-friends");
  const newChat = chatInput.value;
  chatInput.value = "";
  const copyChat = chatFriends.cloneNode(true);
  const chat = copyChat.querySelector(
    ".feeds-like__chat-friends-left span:last-child"
  );
  chat.innerText = newChat;
  chatScreen.appendChild(copyChat);
  const copyChatHeartIcon = copyChat.querySelectorAll("i")[1];
  copyChatHeartIcon.addEventListener("click", heartLike);
  const copyChatDeleteIcon = copyChat.querySelectorAll("i")[0];
  copyChatDeleteIcon.classList.remove("hidden");
  copyChatDeleteIcon.addEventListener("click", deleteChat);
}

chatForm.addEventListener("submit", handleChatSubmit);

function heartLike(event) {
  let btn = event.target;
  btn.classList.toggle("fa-solid");
}

heartBtn.addEventListener("click", heartLike);

function deleteChat(event) {
  let deleteBtn = event.target.parentElement.parentElement.parentElement;
  deleteBtn.remove();
}
likeDelete.addEventListener("click", deleteChat);