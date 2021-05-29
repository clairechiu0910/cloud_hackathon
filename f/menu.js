function checkMenu(cellCoords) {
    for (var i = 0; i < menu_app.$data.shop_info.length; i++) {
        if (cellCoords.x == menu_app.$data.shop_info[i].coor.x && cellCoords.y == menu_app.$data.shop_info[i].coor.y) {
            menu_app.$data.select_idx = i;
            document.getElementById("modal-button").click();
            console.log(menu_app.$data.shop_info[menu_app.$data.select_idx]);
        }
    }
}

var menu_app = new Vue({
    el: '#menu-app',
    data: {
        shop_info: [
            {
                coor: {
                    x: 9, y: 9
                },
                stand_id: 0,
                stand_name: "章魚燒",
                stand_image: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg",
                menu_data: [
                    {
                        food_id: 1,
                        food_name: "海苔章魚燒",
                        food_price: 50,
                        food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
                    },
                    {
                        food_id: 2,
                        food_name: "原味章魚燒",
                        food_price: 50,
                        food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
                    }
                ]
            },
            {
                coor: {
                    x: 7, y: 9
                },
                stand_id: 0,
                stand_name: "滷味",
                stand_image: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg",
                menu_data: [
                    {
                        food_id: 1,
                        food_name: "豆干",
                        food_price: 50,
                        food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
                    },
                    {
                        food_id: 2,
                        food_name: "海帶",
                        food_price: 50,
                        food_image_url: "https://images.chinatimes.com/newsphoto/2020-10-20/1024/20201020004989.jpg"
                    }
                ]
            }
        ],
        select_idx: 0,
        select_items: [],
        total_charge: 0
    },
    methods: {
        add_item: function(idx){
            var select_shop_idx = this.$data.select_idx
            var item_name = this.$data.shop_info[select_shop_idx].menu_data[idx].food_name;
            var item_price = this.$data.shop_info[select_shop_idx].menu_data[idx].food_price;
            this.$data.select_items.push({
                food_name: item_name,
                food_price: item_price
            })
            this.update_total_charge();
        },
        delete_item: function (idx) {
            console.log(idx);
            this.$data.select_items.splice(idx, 1);
            this.update_total_charge();
        },
        update_total_charge: function () {
            this.$data.total_charge = 0;
            for (var i = 0; i < this.$data.select_items.length; i++) {
                this.$data.total_charge += this.$data.select_items[i].food_price;
            }
        }
    }
})