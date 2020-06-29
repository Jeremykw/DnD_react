
// let packItem = item.item_url.match(regex, '')[0]
// .split('-')
// .join(' ')
// .toUpperCase();
// const regex = new RegExp("([^/]+$)", "gi");

const formatUrl = (url) => {
  const formatedUrl = url.replace('api', 'src');
  console.log(formatedUrl[0])
  return formatedUrl;
};

const apiUrl = (url) => {
  const api = "https://dnd5eapi.co/";
  const proxy = "https://secure-ravine-36293.herokuapp.com/";

  const formatedUrl = url.replace("src", "api");
  console.log(proxy + api + formatedUrl[0]);
  return formatedUrl;
};

export { formatUrl, apiUrl };
