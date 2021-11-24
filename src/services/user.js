const api_host = process.env.VUE_APP_API_HOST;

async function getRandomCat() {
  return await fetch("https://aws.random.cat/meow").then((res) => res.json());
}
async function getRandomDog() {
  return await fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
    res.json()
  );
}

async function randAvt() {
  if (Math.random() < 0.5) {
    return getRandomCat().then((rs) => rs.file);
  } else {
    return getRandomDog().then((rs) => rs.message);
  }
}

async function login(username, passwd) {
  return await fetch(`${api_host}/users/login`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      passwd: passwd,
    }),
  })
    .then((rs) => rs.json())
    .then((rs) => {
      let message = rs.message;
      if (message == "ok") {
        return rs.data.token;
      } else {
        throw message;
      }
    });
}
async function fetching(username, passwd, url) {
  return await fetch(`${api_host}/users`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      passwd: passwd,
      avatar_url: url,
    }),
  }).then((rs) => rs.json());
}

async function signup(username, passwd) {
  return randAvt()
    .then((res) => {
      return fetching(username, passwd, res);
    })
    .then((res) => {
      if (res.message == "ok") {
        return res.data.token;
      } else {
        throw res.message;
      }
    });
}

export default { login, signup, getRandomCat, getRandomDog };
