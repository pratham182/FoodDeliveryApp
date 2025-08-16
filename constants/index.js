export const categories=[
    {
        id:1,
        name:"Pizza",
        image:require("../assets/images/pizzaIcon.png")
    },{
        id:2,
        name:"Cold Drink",
        image:require("../assets/images/coldDrinkIcon.png")
    },
    {
        id:3,
        name:"Burger",
        image:require("../assets/images/burgerIcon.png")
    },
    {
        id:4,
        name:"CupCake",
        image:require("../assets/images/cupCakeIcon.png")
    },
    {
        id:5,
        name:"Fish",
        image:require("../assets/images/fishIcon.png")
    },
    {
        id:6,
        name:"Pizza",
        image:require("../assets/images/pizzaIcon.png")
    },
    
]
export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
      // Fast Food
      {
        id: 1,
        name: 'Papa Johns',
        image: require('../assets/images/pizza.png'),
        description: 'Hot and spicy pizzas',
        lng: 38.2159692,
        lat: -85.5224200,
        address: '614 second street',
        stars: 4,
        reviews: '4.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Pepperoni Pizza',
            description: 'Classic pepperoni with extra cheese',
            price: 12,
           
          },
          {
            id: 2,
            name: 'Garlic Breadsticks',
            description: 'Freshly baked with garlic butter',
            price: 5
          }
        ]
      },
  
      // Italian
      {
        id: 2,
        name: 'Mama Mia Trattoria',
        image: require('../assets/images/pasta.png'),
        description: 'Traditional Italian cuisine',
        lng: 38.2165123,
        lat: -85.5217890,
        address: '123 Main Street',
        stars: 5,
        reviews: '5.2k',
        category: 'Italian',
        dishes: [
          {
            id: 1,
            name: 'Spaghetti Carbonara',
            description: 'Classic pasta with egg, cheese, and pancetta',
            price: 16
          },
          {
            id: 2,
            name: 'Tiramisu',
            description: 'Coffee-flavored Italian dessert',
            price: 8
          }
        ]
      },
  
      // Japanese
      {
        id: 3,
        name: 'Sakura Sushi',
        image: require('../assets/images/sushi.png'),
        description: 'Artfully prepared sushi and sashimi',
        lng: 38.2173456,
        lat: -85.5234567,
        address: '456 Oak Avenue',
        stars: 4,
        reviews: '3.8k',
        category: 'Japanese',
        dishes: [
          {
            id: 1,
            name: 'Dragon Roll',
            description: 'Eel, crab, avocado with eel sauce',
            price: 14
          },
          {
            id: 2,
            name: 'Miso Soup',
            description: 'Traditional Japanese soybean soup',
            price: 3
          }
        ]
      },
  
      // Mexican
      {
        id: 4,
        name: 'Taco Fiesta',
        image: require('../assets/images/taco.png'),
        description: 'Authentic Mexican street food',
        lng: 38.2181234,
        lat: -85.5245678,
        address: '789 Pine Road',
        stars: 4,
        reviews: '4.1k',
        category: 'Mexican',
        dishes: [
          {
            id: 1,
            name: 'Carne Asada Tacos',
            description: 'Grilled steak tacos with cilantro and onions',
            price: 10
          },
          {
            id: 2,
            name: 'Churros',
            description: 'Cinnamon sugar pastry with chocolate dip',
            price: 6
          }
        ]
      }
    ]
  };