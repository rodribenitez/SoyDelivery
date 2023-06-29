const url = "https://preprodsoydelivery.uy/aindicadoresweb.aspx"
 
const settings = {
   method : 'POST',
   mode : 'cors',
   headers : {
       'Content-Type': 'application/json'
   }
}


fetch(url,settings).then(
   res => res.json()
). then(
   response => {
       console.log(response);
     const datos = response;
     const pg = document.getElementById("pg")
     const tr = document.getElementById("tr")
     const na = document.getElementById("na")
     const fa = document.getElementById("fa")

     pg.innerText = datos.PG;
     tr.innerText = datos.TR;
     na.innerText = datos.NA;
     fa.innerText = datos.FA;
   }
)
 

