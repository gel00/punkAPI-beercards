export const getBeer = (callback, query) => {
  //removing empty props from filter obj
  query = Object.keys(query)
    .filter((key) => query[key])
    .reduce((obj2, key) => {
      obj2[key] = query[key];
      return obj2;
    }, {});
  //converting into URL parameters
  const filters = new URLSearchParams(query).toString();
  console.log(filters);
  fetch("https://api.punkapi.com/v2/beers?" + filters)
    .then((response) => response.json())
    .then((data) => callback(data));
};
