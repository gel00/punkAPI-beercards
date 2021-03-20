export const getBeer = (callback,obj) => {
  let {name,alc, color} = obj;
  name = name ? `beer_name=${name}` : "";
  alc = alc ? `abv_lt=${alc}` : "";
  color = color ? `ebc_lt=${color}` : "";
  const qArr = [name,alc,color];
  let query = qArr.filter(filter => filter).join("&");
  query = query ? "?"+query : ""; 
  fetch('https://api.punkapi.com/v2/beers'+query)
  .then(response => response.json())
  .then(data => callback(data));
};