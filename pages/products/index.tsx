export default (props) => {
  const { products } = props;

  return (
    <div>
      {products.map((product) => (
        <div key={product.name}>
          <h1>Product: {product.name}</h1>
          <h2>Price: £{product.price}</h2>
        </div>
      ))}
    </div>
  );
};
// This code block will execute at build time
export async function getStaticProps() {
  //const resp = await fetch("https://someapi/products")
  //const products = await resp.json()
  const products = [
    { name: "Book", price: "4.99" },
    { name: "TV", price: "129.99" },
  ];

  return { props: { products } };
}


