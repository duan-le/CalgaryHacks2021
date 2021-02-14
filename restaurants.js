function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "restaurantsData.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

showRestaurants = (restaurantType) => {
  loadJSON(function (json) {
    let restaurants = json.filter((entry) => {
      return entry.type == restaurantType;
    });
    document.getElementById("restaurantDisplay").innerHTML = null;
    for (let i = 0; i < restaurants.length; i++) {
      document.getElementById(
        "restaurantDisplay"
      ).innerHTML += `<div class="itemRestaurant"><div class="itemRestaurantLogo"><img src="${restaurants[i].image}" class="iconDetails"></div><div class="itemRestaurantName"><h4>${restaurants[i].name}</h4><div>${restaurants[i].location}</div><a href=${restaurants[i].skip}>Order Now!</a></div></div>`;
    }
  });
};

showAllRestaurants = () => {
  loadJSON(function (json) {
    let restaurants = json;
    document.getElementById("restaurantDisplay").innerHTML = "";
    for (let i = 0; i < restaurants.length; i++) {
      document.getElementById(
        "restaurantDisplay"
      ).innerHTML += `<div class="itemRestaurant"><div class="itemRestaurantLogo"><img src="${restaurants[i].image}" class="iconDetails"></div><div class="itemRestaurantName"><h4>${restaurants[i].name}</h4><div>${restaurants[i].location}</div><a href=${restaurants[i].skip}>Order Now!</a></div></div>`;
    }
  });
};
