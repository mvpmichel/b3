const axios = require("axios");

axios
    .get("https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote", {
        params: {
            "symbols": "petr4.sa",
        },
        headers: {
            "x-rapidapi-key":
                "64ca974f09msh9ae7f2bb0908e6fp171a55jsn7c2fe40ccb87",
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
        },
    })
    .then((res) => {
        // Ambas requests foram finalizadas
    

        /* console.log(obj2.data.price.regularMarketPrice.fmt); */
    });
