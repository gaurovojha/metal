
// this function returns promise
//FIXME: 
function fetchJson(url) {
    return fetch(url)
           .then ( response =>  {
               console.log(response);
               if (response.status >= 400)
                throw new Error("Invalid request");
                
               return response.json()
           })
           
           //response.json() returns a promise
}

//return a promise
export function fetchProducts() {
    return fetchJson("http://localhost:7070/api/products2")
}