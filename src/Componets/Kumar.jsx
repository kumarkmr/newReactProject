import React, { useEffect, useState } from "react";

const Kumar = () => {
  // const [posts, setPosts] = useState([]);
  // const [loadingMessage, setLoadingMessage] = useState("Loading");

  // useEffect(() => {
  //   // Simulate dynamic loading message
  //   const loadingMessages = [
  //     "Loading",
  //     "Loading .",
  //     "Loading ..",
  //     "Loading ...",
  //   ];
  //   let messageIndex = 0;
  //   const interval = setInterval(() => {
  //     setLoadingMessage(loadingMessages[messageIndex]);
  //     messageIndex = (messageIndex + 1) % loadingMessages.length; // Cycle through the messages
  //   }, 500);

  //   // Fetch posts data
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //       clearInterval(interval); // Stop the loading animation after data is fetched
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));

  //   return () => clearInterval(interval); // Cleanup the interval on component unmount
  // }, []);

  return (
    // <div className="">
    //   <h1>API INTEGRATION</h1>
    //   {posts.length === 0 ? (
    //     <div className="">
    //       <h2>{loadingMessage}</h2>
    //     </div>
    //   ) : (
    //     posts.map((post) => (
    //       <div key={post.id} style={{ border: "2px solid blue" }}>
    //         <p>{post.id}</p>
    //         <h1>{post.title}</h1>
    //         <p>{post.body}</p>
    //       </div>
    //     ))
    //   )}
    // </div>
    <div className=" ">
      <h2>Routing Concept</h2>
    </div>
  );
};

export default Kumar;
