import Pages from './detailPages'

const randomPage = (url) => {
  // determins the page type then
  // returns a url with a randomized page
  const pageType = getPageTypeFromUrl(url);
  return url + "/" + randomDetail(pageType);
};

const getPageTypeFromUrl = (url) => { // not exported called by randomPage
  // returns the subdirectory from the url 
  // to determin a page type
  return url.replace("/src/", "");
};

const randomDetail = (pageType) => { // not exported called by randomPage
  // get an array of possable pages based on the page type
  const pagesArray = Pages[pageType];
  // get random number based on length of array
  const randomNumber = Math.floor(Math.random() * pagesArray.length -1 );
  // index into array with randomNumber and return page
  return pagesArray[randomNumber]
};

const formatUrl = (url) => {
  // replace /api with /src in the url
  if (!url) return;
  const formatedUrl = url.replace("api", "src");
  return formatedUrl;
};

const apiUrl = (url) => {
  // create url for api fetch
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
    console.log('hello its me')
    dataObject = responce.results.map((item) => item);
    return dataObject;
  }
  // if responce has a 'desc' or 'typical_speaker' property the data is not nested and therefor return responce
  if (responce.desc || responce.full_name || responce.typical_speakers ) {
    return responce;
  }
  return responce;
  // convert hash into an array of objets
  dataObject = Object.keys(responce).map((key) => ({
    index: key,
    url: responce[key],
  }));
  return dataObject;

};

async function getData(url) {
  // preform api call
  const response = await fetch(apiUrl(url));
  console.log('url = ', apiUrl(url))
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    // parse results to insure consistant data structure before returning
    return parseResults(data);
  }
}

export { getData, formatUrl, apiUrl, parseResults, randomPage };
