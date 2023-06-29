 const url = "https://preprodsoydelivery.uy/aindicadoresweb.aspx"
 
//  const datos ={
//     "PG":3259,
//     "TR":3258,
//     "NA":518,
//     "FA":321
//  }

 const settings = {
    method : 'POST',
    mode : 'cors',
    headers : {
        'Content-Type': 'application/json'
    }
 }


 const datos = fetch(url,settings).then(
    res => res.json()
 ). then(
    response => {
        console.log(response.data);
    }
 )
  

const pg = document.getElementById("pg")
const tr = document.getElementById("tr")
const na = document.getElementById("na")
const fa = document.getElementById("fa")



pg.innerText = datos.PG
tr.innerText = datos.TR
na.innerText = datos.NA
fa.innerText = datos.FA