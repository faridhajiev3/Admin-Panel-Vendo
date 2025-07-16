import products1 from "../assets/products1.png"

export const ProductsData = [
    {
        image: products1,
        name: "Rare Beauty Liquid Blush",
        id: "789456778",
        category: "Blush",
        stock: 90,
        salesChange: "+156",
        price: "79",
        status: "Active",
        rating: 4.9
    },
    {
        image: products1,
        name: "Fenty Beauty Stick Foundation",
        id: "779456448",
        category: "Foundation",
        stock: 48,
        salesChange: "-45",
        price: "49",
        status: "Active",
        rating: 4.6
    },
    {
        image: products1,
        name: "Rare Beauty Highlighter",
        id: "789456778",
        category: "Highlighter",
        stock: 133,
        salesChange: "+138",
        price: "79",
        status: "Active",
        rating: 4.9
    }
]


export const TransactionsData = [
    {
        type: "Sent",
        amount: "-500.00 AED",
        method: "Credit Card **** 6985",
        status: "Success",
        activity: "Sending money to Amir Aslanov",
        date: "03.22.2024 - 13:25"
    },
    {
        type: "Received",
        amount: "+700.90 USA",
        method: "Credit Card **** 6985",
        status: "Failed",
        activity: "Received money from Andrew",
        date: "03.22.2024 - 10:25"
    },
    {
        type: "Received",
        amount: "+500.00 AED",
        method: "Credit Card **** 6985",
        status: "Success",
        activity: "Received money from Amir Aslanov",
        date: "03.22.2024 - 20:25"
    },
    {
        type: "Converted",
        amount: "100.00 USA",
        method: "Bank Transfer **** 5589",
        status: "Success",
        activity: "Convert money from USD to AZN",
        date: "03.21.2024 - 13:40"
    },
    {
        type: "Received",
        amount: "+500.00 AED",
        method: "PayPal **** 6985",
        status: "Incompleted",
        activity: "Received money from Andrew",
        date: "03.20.2024 - 13:25"
    },
    {
        type: "Received",
        amount: "+300.00 AZN",
        method: "Credit Card **** 6985",
        status: "Success",
        activity: "Received money from Andrew",
        date: "03.20.2024 - 17:00"
    },
    {
        type: "Sent",
        amount: "-500.00 AED",
        method: "Debit Card **** 2795",
        status: "Success",
        activity: "Sending money to Amir Aslanov",
        date: "03.19.2024 - 18:25"
    },
    {
        type: "Sent",
        amount: "-500.00 USA",
        method: "PayPal **** 6985",
        status: "Success",
        activity: "Sending money to Amir Aslanov",
        date: "03.18.2024 - 9:47"
    }
];
