function getURL() {
  let host = window.location.hostname;
  let protocol = window.location.protocol;
  let url = null;

  if (host === "localhost") {
    url = protocol + "//" + host + ":8080"
  } else {
    url = protocol + "//" + "piontekle.herokuapp.com"
  }

  return url;
}

export default getURL;
