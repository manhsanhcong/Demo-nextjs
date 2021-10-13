import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "../../components/Button";

const LifrCycle = () => {
  // Tương ứng với Constructor
  useMemo(() => {
    console.log("useMemo run <-> constructor");
  }, []);

  const inputFile = useRef(null);

  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Smith",
  });

  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     console.log("useEffect run");
  //   });
  useEffect(() => {
    console.log("Run khi có bất kì state nào thay đổi");
  });

  useEffect(() => {
    console.log("useEffect run - empty dependency");
  }, []);

  useEffect(() => {
    console.log("Lắng nghe sự thay đổi của counter");
  }, [counter]);

  useEffect(() => {
    console.log("Lắng nghe sự thay đổi của visible");
  }, [visible]);

  console.log("Trước khi return <=> Render");

  const fullName = useMemo(() => {
    return user.firstName + " " + user.lastName;
  }, [user]);

  const handleIncreaseCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div className="container">
      <h1>Life Cycle - React Hook {fullName}</h1>
      <button onClick={handleIncreaseCounter}>Counter Add</button>
      <p>{counter}</p>

      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Hide Button
      </button>
      {visible && <Button />}
      <br />
      <hr />

      <input
        style={{
          opacity: 0,
          visibility: "hidden",
          position: "fixed",
          left: "-100px",
        }}
        ref={inputFile}
        type="file"
      />

      <button
        style={{
          padding: "20px 30px",
          color: "#000",
          cursor: "pointer",
          border: "1px solid green",
          background: "yellow",
        }}
        className="upload"
        onClick={() => {
          console.log(inputFile.current);
          inputFile.current.click();
        }}
      >
        Upload file
      </button>
    </div>
  );
};

export default LifrCycle;
