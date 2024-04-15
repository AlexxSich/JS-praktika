import axios from 'axios';

const userCommentForm = document.querySelector('.footer-comments');

userCommentForm.addEventListener('submit', userCommentHandler);

function postComment(userComment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/requests';

  const url = `${BASE_URL}${END_POINT}`;

  return axios.post(url, userComment).then(res => res.data);
}
// ===========================================================

function messageTemplate(newComment) {
  return `<h3>${newComment.title}</h3>
                <p>${newComment.message}</p>`;
}

// ==========================================================

// ============================================================

async function userCommentHandler(event) {
  event.preventDefault();

  const userComment = {
    email: userCommentForm.elements.userEmail.value.trim(),
    comment: userCommentForm.elements.textArea.value.trim(),
  };

  const newComment = await postComment(userComment);
  const markup = messageTemplate(newComment);
  console.log(markup);
}

// const inputMessage = document.querySelector('.form-input');
// inputMessage.addEventListener('blur', handleBlur);

// function handleBlur(event) {
//   const userEmail = event.currentTarget.value.trim();
//   if (userEmail) console.log(event);
// }
