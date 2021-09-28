function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
}

//--------------------------------------//

const URL = '/server'
let xhr = new XMLHttpRequest()
xhr.open('GET', URL, true)
xhr.onreadystatechange = function () {
  if (this.readyState !==4 ) return ;
  if (this.status === 200) {
    handle(this.response)
  }  else {
    console.log(this.statusText)
  }
}
xhr.responseType = 'json'
xhr.setRequestHeader('Accept', 'application/json')
xhr.send(null)

//--------------------------------------//

function getJSON(url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (this.readyState !==4 ) return ;
      if (this.status === 200) {
        resolve(this.response)
      }  else {
        reject(new Error(this.statusText))
      }
    }
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(null)
  })
  return promise
}
