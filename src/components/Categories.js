// import React, { Component } from "react";
// import Theme from "./styles/Theme";
// import styled, { ThemeProvider } from "styled-components";
// import { apiUrl } from "./helpers/regexHelpers";
// import Styles from "./styles/Styles";
// import Head from "./Head";
// import Nav from "./Nav";
// import ListItems from "./ListItems";


// class Categories extends Component {

//   componentDidMount() {
//     this.getData(this.state.url);
//   }

//   getData = (url) => {
    


//     fetch(apiUrl(url))
//       .then((response) => {
//         return response.json();
//       })
//       .then((jsonData) => {
//         const data = this.parseResults(jsonData);
//         this.setState({ data: data, url: data.url });
//       })
//       .catch((err) =>
//         console.log(
//           `their was an error with with the network conection: ${err}`
//         )
//       );
//   };

//   parseResults = (responce) => {
//     // Parse data returned from API and return consistant results
//     let dataObject = [];
//     // if data is nested in .resutls return results only
//     if (responce.results) {
//       dataObject = responce.results.map((item) => item);
//       return dataObject;
//     }
//     // convert hash into an array of objets
//     dataObject = Object.keys(responce).map((key) => ({
//       index: key,
//       url: responce[key],
//     }));
//     return dataObject;
//   };

//   render() {
//     return (
//       <ThemeProvider theme={Theme}>
//         <div>
//           <Head />
//           <Nav />
//             <ListItems getData={this.getData} data={} />
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

// export default Categories;
