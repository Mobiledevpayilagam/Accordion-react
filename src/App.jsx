import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [data, setData] = useState([]);
  const fetchUrl = "https://jsonplaceholder.typicode.com/posts";
  const [itemToBeExpanded, setItemToBeExpanded] = useState();

  const handleExpand = (id) => () => {
    console.log(id);
    setItemToBeExpanded((itemToBeExpanded) =>
      itemToBeExpanded === id ? null : id
    );
  };

  const handleFetchAsync = async () => {
    try {
      const response = await fetch(fetchUrl);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData(jsonResponse);
    } catch (error) {
      console.log("Fetch error");
    }
  };

  const handleFetchPromise = () => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((e) => console.log(e));
  };

  // useEffect(() => {
  //   (async () => {
  //     let controller = new AbortController();
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //         { signal: controller.signal }
  //       );
  //       const jsonResponse = await response.json();
  //       console.log(jsonResponse);
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   })();
  // }, []);

  return (
    <div>
      <p>Hello world!</p>
      <button onClick={handleFetchAsync}>Fetch using async/await</button>
      <button onClick={handleFetchPromise}>Fetch using promise</button>
      <p>{data.length}</p>
      {data.map((post) => (
        <Post
          post={post}
          key={post.id}
          handleExpand={handleExpand(post.id)}
          expandAccordion={itemToBeExpanded === post.id ? true : false}
        />
      ))}
    </div>
  );
}

export default App;
