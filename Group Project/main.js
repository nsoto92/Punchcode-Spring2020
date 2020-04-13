$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    var apps = data.appetizers
      .map(function(item) {
        return `
        <div class="apps">
          <div class="firstline">
            <p class="price">$${item.price}</p>
            <p class="title"> ${item.name}</p>
            <p class="extra"> ${(item.extra.spicy &&
              '<i class="fas fa-pepper-hot"></i>') ||
              ""} 
            ${(item.extra.glutenfree && '<i class="fas fa-ban"></i>') || ""}
            ${(item.extra.vegetarian && '<i class="fas fa-seedling"></i>') ||
              ""} </p>
</p>
          </div><br>
            <p class="description">${item.description}</p>
        </div>
        <br> `
      })

      .join("")
    $(".apps").html(apps)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    var entree = data.entrees
      .map(function(item) {
        return `
        <div class="entr">
          <div class="firstline">
            <p class="price">$${item.price}</p>
            <p class="title"> ${item.name}</p>
            <p class="extra"> ${(item.extra.spicy &&
              '<i class="fas fa-pepper-hot"></i>') ||
              ""} 
            ${(item.extra.glutenfree && '<i class="fas fa-ban"></i>') || ""}
            ${(item.extra.vegetarian && '<i class="fas fa-seedling"></i>') ||
              ""} </p>
</p>
          </div><br>
            <p class="description">${item.description}</p>
        </div>
        <br> `
      })

      .join("")
    $(".entr").html(entree)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    var dessert = data.desserts
      .map(function(item) {
        return `
        <div class="dess">
          <div class="firstline">
            <p class="price">$${item.price}</p>
            <p class="title"> ${item.name}</p>
            <p class="extra"> ${(item.extra.spicy &&
              '<i class="fas fa-pepper-hot"></i>') ||
              ""} 
            ${(item.extra.glutenfree && '<i class="fas fa-ban"></i>') || ""}
            ${(item.extra.vegetarian && '<i class="fas fa-seedling"></i>') ||
              ""} </p>
</p>
          </div><br>
            <p class="description">${item.description}</p>
        </div>
        <br> `
      })

      .join("")
    $(".dess").html(dessert)
  })
})
