const items = [
  {
    "id": 'item1',
    "NAME": "Dosa",
    "TYPE": "Veg",
    "CUISINE": "South Indian",
    "AVAILABILITY": [
      "BREAKFAST",
      "LUNCH"
    ],
    "PRICE": "50"
  },
  {
    "id": 'item2',
    "NAME": "Chappathi",
    "TYPE": "Veg",
    "CUISINE": "North Indian",
    "AVAILABILITY": [
      "BREAKFAST",
      "LUNCH"
    ],
    "PRICE": "40"
  },
  {
    "id": 'item3',
    "NAME": "Chicken",
    "TYPE": "Non-Veg",
    "CUISINE": "South Indian",
    "AVAILABILITY": [
      "BREAKFAST",
      "LUNCH",
      "DINNER"
    ],
    "PRICE": "100"
  }
];

const orders = [
  {
    "id": 1,
    "orderId": 1,
    "totalAmount": 120,
    "items": [
      {
        "id": "item2",
        "NAME": "Chappathi",
        "TYPE": "Veg",
        "CUISINE": "North Indian",
        "AVAILABILITY": [
          "BREAKFAST",
          "LUNCH"
        ],
        "PRICE": "40",
        "quantity": 3
      }
    ],
    "ORDER_TIME": "1:4 pm",
    "ORDER_DATE": "12-7-2022"
  },
  {
    "id": 2,
    "orderId": 2,
    "totalAmount": 120,
    "items": [
      {
        "id": "item2",
        "NAME": "Chappathi",
        "TYPE": "Veg",
        "CUISINE": "North Indian",
        "AVAILABILITY": [
          "BREAKFAST",
          "LUNCH"
        ],
        "PRICE": "40",
        "quantity": 3
      }
    ],
    "ORDER_TIME": "1:4 pm",
    "ORDER_DATE": "11-7-2022"
  },
  {
    "id": 3,
    "orderId": 3,
    "totalAmount": 120,
    "items": [
      {
        "id": "item2",
        "NAME": "Chappathi",
        "TYPE": "Veg",
        "CUISINE": "North Indian",
        "AVAILABILITY": [
          "BREAKFAST",
          "LUNCH"
        ],
        "PRICE": "40",
        "quantity": 3
      }
    ],
    "ORDER_TIME": "1:4 pm",
    "ORDER_DATE": "13-7-2022"
  }
];

export { items, orders };