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

    for (var i = 0; i < shop.menu.length; i++) {
        var div = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");

        div.className = "form-check";

        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.value = label.textContent = shop.menu[i];
        checkbox.style["margin-right"] = "3%";

        label.className = "form-check-label";

        div.appendChild(checkbox);
        div.appendChild(label);

        document.getElementById("menu-things").appendChild(div);
    }
}

var shopInfo = [
    {
        id: 0,
        name: "shop1",
        coor: {
            x: 9,
            y: 9
        },
        menu: ["hello11", "hello12"]
    }, {
        id: 1,
        name: "shop2",
        coor: {
            x: 5,
            y: 5
        },
        menu: ["hello21", "hello22"]
    }, {
        id: 2,
        name: "shop3",
        coor: {
            x: 1,
            y: 0
        },
        menu: ["hello31", "hello32"]
    }
]