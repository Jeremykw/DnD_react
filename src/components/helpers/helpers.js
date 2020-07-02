
// let packItem = item.item_url.match(regex, '')[0]
// .split('-')
// .join(' ')
// .toUpperCase();
// const regex = new RegExp("([^/]+$)", "gi");

const formatUrl = (url) => {
  if (!url) return;
  const formatedUrl = url.replace('api', 'src');
  console.log(formatedUrl[0])
  return formatedUrl;
};

const apiUrl = (url) => {
  const api = "https://dnd5eapi.co";
  const proxy = "https://secure-ravine-36293.herokuapp.com/";
  const formatedUrl = proxy + api + url.replace("src", "api");
  return formatedUrl;
};

const parseResults = (responce) => {
  // Parse data returned from API and return consistant results
  let dataObject = [];
  // if data is nested in .resutls return results only
  if (responce.results) {
    dataObject = responce.results.map((item) => item);
    return dataObject;
  }
  // convert hash into an array of objets
  dataObject = Object.keys(responce).map((key) => ({
    index: key,
    url: responce[key],
  }));
  return dataObject;
};

export { formatUrl, apiUrl, parseResults };
