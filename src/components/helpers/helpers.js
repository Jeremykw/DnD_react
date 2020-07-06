const formatUrl = (url) => {
  if (!url) return;
  const formatedUrl = url.replace('api', 'src');
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
  // if responce has a desc property the data is not nested and therefor return responce
  if (responce.desc || responce.full_name) {
    return responce;
  }
  // convert hash into an array of objets
  dataObject = Object.keys(responce).map((key) => ({
    index: key,
    url: responce[key],
  }));
  return dataObject;
};

async function getData(url) {
  const response = await fetch(apiUrl(url));
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    return parseResults(data);
  }
};

export { getData, formatUrl, apiUrl, parseResults };
