export default (req, res) => {
  if (req.method === "POST") {
    const product = req.body;
    // Save product to database...
    res.statusCode = 200;
  } else if (req.method === "GET") {
    res.statusCode = 200;
    // Load products from DB/Cache...
    res.json({
      products: [
        { name: "Book", price: "4.99" },
        { name: "Book", price: "129.99" },
      ],
    });
  }
};
