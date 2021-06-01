// ### below is a method for accessing API without axios , so we have to primarily use .then() and .catch() methods.

axios
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error is :", err);
  });

// ###

// **** Accessing APIS via axios library :  {using try catch is optional , just used for in case there is a problem in api and we have to deal with it using catch(e)}

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(res.data.ticker);
  } catch (e) {
    console.log("Error :", e);
  }
};
fetchBitcoinPrice();

// ****

// $$$
// here we have addition of headers and accept arguments for changing type of format which we access through api , and through DOM im appending the jokes to a list on this page.

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const ApiResult = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(ApiResult.data.joke);
  const randJoke = ApiResult.data.joke;
  const Ul = document.createElement("ul");
  const Li = document.createElement("li");
  Li.innerText = randJoke;
  document.querySelector("#jokes").appendChild(Ul).appendChild(Li);
};

// $$$
