export const getBeer = (callback,str) => {
  const query = str ? `?beer_name=${str}` : "";
  fetch('https://api.punkapi.com/v2/beers'+query)
  .then(response => response.json())
  .then(data => callback(data));
};