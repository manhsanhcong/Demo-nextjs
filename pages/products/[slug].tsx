import { useRouter } from "next/router";

export default (props) => {
  const { productData } = props;
  const { name, price, imageUrl, createdAt } = productData;

  return (
    <div>
      <h1>Product: {name}</h1>
      <h2>Price: £{price}</h2>
      <img src={imageUrl} />
      <span>Created At: {createdAt}</span>
    </div>
  );
};

// Runs for every initial page request
export async function getServerSideProps() {
  const { slug } = useRouter().query;
  // Dynamically fetch some product data
  const resp = await fetch(`https://someapi/products/${slug}`);
  const productData = await resp.json();

  return { props: { productData } };
}

