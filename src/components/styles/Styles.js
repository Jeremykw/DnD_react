import styled, { injectGlobal } from "styled-components";

const Styles = injectGlobal`

html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    letter-spacing: 2px;
    font-size: 20px;
    color: var(--font);
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
    background-image: url("../images/background.jpg");
    background-size: cover;
    min-height: 100%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: var(--black);
}

body {

    ${"" /* background-size: 500px, auto; */}
    ${"" /* min-height: calc(100vh - 100px); */}
    ${"" /* background-attachment: fixed; */}
    letter-spacing: -1px;
    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.07);
    padding: 0;
    margin: 0;
    display: grid;
    justify-content: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 5px 0;
}


`;

export default Styles;
