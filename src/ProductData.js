module.exports = {
  /*
  This module loads mock product data Into localStorage.
  The most important field is 'sku', because it acts as a "real ID" for each variants of
  the items inside the cart. Although each item has corresponding ID fields, what
  distinguishes variants that are actually getting added to the cart are these skus. 
  */
  init: function() {
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify([
      {
    id: '31000120200',
    name: "Banquet Chicken Breast Tenders",
    image: "https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0031000120200_CL_version_type_large.jpeg",
    description: "Made with 100% natural* chicken breast with rib meat.",
    variants: [
      {
      sku: '10',
      type: '240 ml',
      nuVal: 1,
      price: 1.69,
      inventory: 15
      }
    ]
    // "maincategory": "Frozen",
    // "brand": "Banquet",
    // "subcategory1": "Frozen Meat",
    // "item": "Frozen Chicken Breast",
    // "subcategory2": "Frozen Chicken",
    // "price": 3.77,
    // "onsale": "no",
    // "quantity": "24 oz",
    // "caloriesperserving": 210,
    // "nuval": 51,
    // "servingsize": "85 g",
    // "servingsperpackage": 8,
  },
  {
          id: '49000050100',
          name: 'Coca-Cola',
          image: 'https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0049000050100_CF_version_type_large.jpeg',
          description: "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world.",
          variants: [
            {
            sku: '11',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          "maincategory": "Beverages"
          // "brand": "Coca-Cola",
          // "subcategory1": "Soft Drinks",
          // "subcategory2": "Carbonated Soft Drinks",
          // "onsale": "yes",
          // "quantity": "2 L",
          // "caloriesperserving": 100,
          // "nuval": 1,
          // "servingsize": "240 ml",
          // "servingsperpackage": 8
      },
      {
    "item": "Spinach",
    id: '32601900950',
    name: "Earthbound Farm Organic Baby Spinach Blend",
    image: "https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0032601900950_CF_version_type_large.jpeg",
    description: "In 1984, on 21/2-acres in California's verdant Carmel Valley, Drew & Myra Goodman started Earthbound Farm. Rooted on that tiny farm, our commitment to organic has grown stronger every year. Thank you for choosing organic!",
    variants: [
      {
      sku: '12',
      type: '240 ml',
      nuVal: 1,
      price: 1.69,
      inventory: 15
      }
    ],
    "maincategory": "Fresh"
    // "subcategory1": "Produce",
    // "subcategory2": "Packaged Produce --> Bagged Salad Mixes",
    // "price": "2/$7.00",
    // "onsale": "Yes",
    // "quantity": "5 oz",
    // "caloriesperserving": 20,
    // "nuval": "no",
    // "servingsize": "3 oz (85g/about 2 cups)",
    // "servingsperpackage": 1
},
{

          id: '44000032020',
          name: "Nabisco Oreo Chocolate Sandwich Cookies",
          image: "https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0044000032020_CF_version_type_large.jpeg",
          description: "Carry love in your heart and Oreo cookies everywhere else.",
          variants: [
            {
            sku: '13',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          // "item": "Oreos",
          "maincategory": "Pantry"
          // "brand": "Nabisco",
          // "subcategory1": "Snack Foods",
          // "subcategory2": "Cookies",
          // "price": 2.98,
          // "onsale": "no",
          // "quantity": "14.3 oz",
          // "caloriesperserving": 160,
          // "nuval": 3,
          // "servingsize": "34g",
          // "servingsperpackage": 12,
      },
      {
          "item": "Bread",
          id: '72945601330',
          name: "Sara Lee Bread White",
          image: "https://1372d34c156f12457517-c8b49206fc42ea00d5fd50b8ec61d670.ssl.cf2.rackcdn.com/0072945601330_A1L1_ItemMaster_type_large.jpeg",
          variants: [
            {
            sku: '14',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          // description: "Bread is low fat, cholesterol free food. 0 grams of trans fat per serving. Per 2 slice serving: 150 calories. 0.5g sat fat 3% DV. 230mg sodium 10% DV. 3g sugars. A bread that truly deserves all the accolades. It's the original Sara Lee white, a bread so faithful to tradition that folks all over can't really have a sandwich without it. The flavor and texture say it all, and isn't that what enjoying bread is all about?",
          "maincategory": "Pantry"
          // "brand": "Sara Lee",
          // "subcategory1": "Bread & Cakes",
          // "subcategory2": "Bread",
          // "price": 1.99,
          // "onsale": "yes",
          // "quantity": "20 oz",
          // "caloriesperserving": 150,
          // "nuval": 25,
          // "servingsize": "Two slices",
          // "servingsperpackage": 10
      },
      {
          "item": "Apples",
          id: '41330',
          name: "Gala Apples",
          description: "Sweet, Juicy, Crisp",
          image: "https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0000000041330_CL_hyvee_default_large.jpeg",
          variants: [
            {
            sku: '15',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          "maincategory": "Fresh"
          // "brand": "NA",
          // "subcategory1": "Produce",
          // "subcategory2": "Fresh Fruit",
          // "price": "$0.59 ea",
          // "onsale": "yes",
          // "quantity": ".40 lbs",
          // "caloriesperserving": "NA",
          // "nuval": 100,
          // "servingsize": "NA",
          // "servingsperpackage": "NA",
          // "nutritionlabel": "NA"
      },
      {
          "item": "Milk",
          id: '73948010150',
          name: "Central Dairy Vitamin D Whole Milk Gallon",
          description: "None",
          image: "https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0073948010150_CL_hyvee_default_large.png",
          variants: [
            {
            sku: '16',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          "maincategory": "Fresh"
          // "brand": "Central",
          // "subcategory1": "Dairy, Cheese & Eggs",
          // "subcategory2": "Milk & Cream ---> Cows Milk",
          // "price": 4.49,
          // "onsale": "no",
          // "quantity": "128 fl oz",
          // "caloriesperserving": 150,
          // "nuval": "no",
          // "servingsize": "1 cup (240 mL)",
          // "servingsperpackage": "about 16"
      },
      {

          id: '14100096550',
          name: "Pepperidge Farm Goldfish Cheddar Baked Snack Crackers",
          image: "https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0014100096550_CL_version_type_large.jpeg",
          description: "Goldfish CrackersEveryone loves Goldfish crackers – they're tasty and fun! With a large 30 oz carton you can always come back for more, or have enough to feed a crowd. The Snack that Smiles BackWhen it comes to Goldfish crackers, you can feel good about serving your favorite snacks. All of our cheese varieties, like cheddar, are baked with real cheese, and Goldfish crackers are made with no artificial preservatives. or flavors.",
          variants: [
            {
            sku: '17',
            type: '240 ml',
            nuVal: 1,
            price: 1.69,
            inventory: 15
            }
          ],
          "maincategory": "Pantry"
          // "brand": "Pepperidge Farm",
          // "subcategory1": "Snack Foods",
          // "subcategory2": "Crackers",
          // "price": 7.86,
          // "onsale": "no",
          // "quantity": "30 oz",
          // "caloriesperserving": 140,
          // "nuval": 24,
          // "servingsize": "30 g",
          // "servingsperpackage": 28,
          // "item": "Goldfish"
      },
      {
        id:'260803000000',
        name:"Cookies	Chocolate Chip Cookies with Ghirardelli Chocolate Chip",
        image: "https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0260803000000_CL_hyvee1_default_large.jpeg",
        description: "Bakery Fresh Cookies",
        variants: [
          {
          sku: '18',
          type: '12 ct',
          nuVal: 1,
          price: 3.99,
          inventory: 15
          }
        ],
        "maincategory": "Bakery"
      },
      {
        id:'75450055100',
        name:"Hy-Vee Pure Granulated Cane Sugar",
        image: "https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0075450055100_CL_version_type_large.jpeg",
        description: "Hy-Vee Pure Granulated Cane Sugar	Pure cane sugar",
        variants: [
          {
          sku: '19',
          type: '4 lb',
          nuVal: 1,
          price: 1.89,
          inventory: 15
          }
        ],
        "maincategory": "Pantry"
      },
      {
        id:'34500151500',
        name:"Butter",
        image: "https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0034500151500_CL_version_type_large.jpeg",
        description: "Bring out the real, natural flavor of your foods.The fresh sweet cream in Land'O Lakes Unsalted Butter comes from the farm families of Land'O'Lakes.Only Land O'Lakes butter has the FlavorProtect Wrapper to keep other flavors out and the fresh taste you love in.",
        variants: [
          {
          sku: '20',
          type: '4 lb',
          nuVal: 1,
          price: 2.5,
          inventory: 15
          }
        ],
        "maincategory": "Fresh"
      },
       {
        id:'34500151523',
        name:"Baby Wipes",
        image: "https://lh3.googleusercontent.com/tMYoYyB2ARqTtP_ZNc5mD3dg4BdzQwlpIw3qUKAQeNsYKgi1WbLHNpMmQHxeIp8mgnQnQGw=s85",
        description: "Bring out the real, natural flavor of your foods.The fresh sweet cream in Land'O Lakes Unsalted Butter comes from the farm families of Land'O'Lakes.Only Land O'Lakes butter has the FlavorProtect Wrapper to keep other flavors out and the fresh taste you love in.",
        variants: [
          {
          sku: '21',
          type: '4 lb',
          nuVal: 1,
          price: 2.5,
          inventory: 15
          }
       },
      {
          "item": "Tortilla Chips",
          id: '28400064057',
          name: "TOSTITOS Tortilla Chips - Bite Size",
          description: "TOSTITOS tortilla chips and dips are the life of the party. Whether you're watching the game with friends or throwing a giant backyard barbecue, TOSTITOS has the must-have chips and dips to pump up the fun!",
          image: "http://www.fritolay.com/images/default-source/blue-bag-image/tostitos-bite-size.png?sfvrsn=2",
          variants: [
            {
            sku: '22',
            type: '13 oz',
            nuVal: 1,
            price: 4.29,
            inventory: 15
            }
          ],
          "maincategory": "Snack Foods"
          // "brand": "TOSTITOS",
          // "subcategory1": "Chips & Pretzels",
          // "subcategory2": "Tortilla Chips",
          // "price": 4.29,
          // "onsale": "no",
          // "quantity": "13 oz",
          // "caloriesperserving": 140,
          // "nuval": "no",
          // "servingsize": "28 g",
          // "servingsperpackage": "13"
          },
      {
          "item": "Pop-Tarts",
          id: '38000311200',
          name: "Kellogg's Pop-Tarts Frosted Brown Sugar Cinnamon Toaster Pastries 12ct",
          description: "The very tasty combo of brown sugar and cinnamon comes through in every single bite of frosting, filling and golden crust.",
          image: "https://images-na.ssl-images-amazon.com/images/I/51boc-xk0bL.jpg",
          variants: [
            {
            sku: '23',
            type: '12 ct',
            nuVal: 1,
            price: 3.14,
            inventory: 15
            }
          ],
          "maincategory": "Breakfast Foods"
          // "brand": "Kellogg's",
          // "subcategory1": "Toaster Pastries",
          // "subcategory2": "Toaster Pastries",
          // "price": 3.14,
          // "onsale": "no",
          // "quantity": "21 oz",
          // "caloriesperserving": 210,
          // "nuval": "no",
          // "servingsize": "50 g",
          // "servingsperpackage": "12"
          },
      {
          "item": "Cereal",
          id: '16000483660',
          name: "General Mills Honey Nut Cheerios Family Size",
          description: "The real honey taste you love has always come with oats that are naturally gluten free. We're simply making sure they stay that way.",
          image: "https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0016000483660_CF_version_type_large.jpeg",
          variants: [
            {
            sku: '24',
            type: '21.6 oz',
            nuVal: 1,
            price: 3.64,
            inventory: 15
            }
          ],
          "maincategory": "Breakfast Foods"
          // "brand": "General Mills",
          // "subcategory1": "Cereal",
          // "subcategory2": "Box Cereal",
          // "price": 3.64,
          // "onsale": "no",
          // "quantity": "21.6 oz",
          // "caloriesperserving": 110,
          // "nuval": "no",
          // "servingsize": "28 g",
          // "servingsperpackage": "22"
           },
      {
          "item": "Mac & Cheese",
          id: '21000658860',
          name: "Kraft Deluxe Original Cheddar Macaroni & Cheese",
          description: "Deluxe Taste You Know You'll Love. It's rich. It's creamy. And it's love at first bite for this delicious dish made with real cheese.Heartier elbow macaroni lets you enjoy more cheese with every bite.",
          image: "https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0021000658860_CF_version_type_large.jpeg",
          variants: [
            {
            sku: '25',
            type: '14 oz',
            nuVal: 1,
            price: 2.48,
            inventory: 15
            }
          ],
          "maincategory": "Pantry"
          // "brand": "Kraft",
          // "subcategory1": "Prepared Meals and Sides",
          // "subcategory2": "Mac and Cheese",
          // "price": 2.48,
          // "onsale": "no",
          // "quantity": "14 oz",
          // "caloriesperserving": 320,
          // "nuval": "no",
          // "servingsize": "98 g",
          // "servingsperpackage": "4"
          },
      {
          "item": "Juice",
          id: '25000055430',
          name: "Simply Orange with Calcium Pulp Free Orange Juice",
          description: "none",
          image: "https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0025000055430_CF_version_type_large.jpeg",
          variants: [
            {
            sku: '26',
            type: '59 fl oz',
            nuVal: 1,
            price: 4.29,
            inventory: 15
            }
          ],
          "maincategory": "Beverages"
          // "brand": "Simply Orange",
          // "subcategory1": "Juice",
          // "subcategory2": "Orange Juice",
          // "price": 4.29,
          // "onsale": "no",
          // "quantity": "59 fl oz",
          // "caloriesperserving": 110,
          // "nuval": "no",
          // "servingsize": "8 oz",
          // "servingsperpackage": "7"
    ]));
         
  }

};
