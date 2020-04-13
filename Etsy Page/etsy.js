const html = items.results
  .map(function(item) {
    return `
    <div class="products">
      <img src=${item.Images[0].url_fullxfull}>
      <div class="description">
        <p class="title">${item.title}</p>
        <p class= "price">${
          item.currency_code === "GBP" ? "&pound;" : "$"
        }${item.price}</p>
      </div>
    </div>
  `
  })
  .join("")

document.querySelector("#prodlist").innerHTML = html
