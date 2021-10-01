import { useRouter } from "next/router";

export default function AdminUser({ example }) {
  const router = useRouter();

  console.log("router", router.query.id);

  //   function handleOnClick() {
  //     router.push("/login");
  //   }

  return (
    <>
      <h1>Page Admin --- User ID {example}</h1>
      {/* <button onClick={handleOnClick}>Go to homepage</button> */}
    </>
  );
}
AdminUser.getInitialProps = ({ query: { example } }) => {
  return { example };
};
