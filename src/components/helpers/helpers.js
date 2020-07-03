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
  
    // .then((response) => {
    //   return response.json();
    // })
    // .then((jsonData) => {
    //   console.log(parseResults(jsonData))
    //   return parseResults(jsonData);
    // })
    // .catch((err) =>
    //   console.log(
    //     `their was an error with with the network conection: ${err}`
    //   )
    // );


export { getData, formatUrl, apiUrl, parseResults };
