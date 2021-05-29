function checkMenu(cellCoords) {
    for (var i = 0; i < shopInfo.length; i++) {
        if (cellCoords.x == shopInfo[i].coor.x && cellCoords.y == shopInfo[i].coor.y) {
            desplayMenu(shopInfo[i]);
        }
    }
}

function desplayMenu(shop) {
    document.getElementById("modal-button").click();
    console.log(shop);

    document.getElementById("exampleModalLabel").textContent = "Menu of " + shop.name;

    document.getElementById("menu-things").innerHTML = "";

    for (var i = 0; i < shop.menu_data.length; i++) {
        var div_row = document.createElement("div");
        div_row.className = "row";
        var div_col1 = document.createElement("div");
        div_col1.className = "col-8";
        var div_col2 = document.createElement("div");
        div_col2.className = "col-4";
        var hr = document.createElement("hr");
        hr.className = "my-4";

        var food_name = document.createElement("h3");
        food_name.textContent = shop.menu_data[i].food_name;
        var food_prize = document.createElement("h5");
        food_prize.textContent = "$" + shop.menu_data[i].food_prize;

        var img = document.createElement("img");
        img.src = shop.menu_data[i].food_image_url;
        img.className = "rounded";
        img.style["width"] = "100";
        img.style["height"] = "100";

        div_col1.appendChild(food_name);
        div_col1.appendChild(food_prize);

        div_col2.appendChild(img);
        
        div_row.appendChild(div_col1);
        div_row.appendChild(div_col2);
        
        document.getElementById("menu-things").appendChild(div_row);
        document.getElementById("menu-things").appendChild(hr);
    }
}

var shopInfo = [
    {
        coor: {
            x: 9, y: 9
        },
        stand_id: 1,
        stand_name: "章魚燒",
        stand_image: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg",
        menu_data: [
            {
                food_id: 1,
                food_name: "海苔章魚燒",
                food_prize: 50,
                food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
            },
            {
                food_id: 2,
                food_name: "原味章魚燒",
                food_prize: 50,
                food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
            }
        ]
    }
]