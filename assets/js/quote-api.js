const BASE_URL = "https://goquotes-api.herokuapp.com/api/v1/all/quotes";

const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("get", url)

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    const response = JSON.parse(xhr.response)
                    resolve(response)
                }
                else{
                    reject(xhr.status)
                }
            }
        }
        xhr.send()
    })
}

let quoteData = {}
getRequest(BASE_URL)
    .then((data) => {
      quoteData = data.quotes 
  })