const cont = document.getElementById("col");

const library = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((response) => {
      if (response.ok) {
        console.log("Andata", response);
        return response.json();
      } else {
        throw new Error("noooooo");
      }
    })
    .then((data) => {
      console.log(data);

      data.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col col-12 col-md-4 col-xl-3 mt-5";
        col.innerHTML = `
             <div class="card ">
              <img src="${book.img}" class="card-img-top  " alt="..." />
              <div class="card-body">
                <h5 class="card-title">Titolo - ${book.title}</h5>
                <h5 class="card-title"> Prezzo - $${book.price}</h5>
                <h5 class="card-title">Categoria - ${book.category}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
          `;
        cont.appendChild(col);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
library();
