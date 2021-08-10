const makeContent = (elem, txt) => {
    elem.innerHTML = `<p>${txt}</p>`;
}
const makeHeadLines = (elem, txt) => {
    elem.innerHTML = `<h1>${txt}</h1>`;
}

export {makeContent,makeHeadLines};