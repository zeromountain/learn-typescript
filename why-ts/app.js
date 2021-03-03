// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} user
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
fetchUser().then((response) => {
  response.address.city;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      // user.forEach((el) => {
      //   console.log(el);
      //   username.innerHTML += `<br>${el.name}<br>`;
      //   email.innerHTML += `<br>${el.email}<br>`;
      //   address.innerHTML += `<br>${el.address.city}<br>`;
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
