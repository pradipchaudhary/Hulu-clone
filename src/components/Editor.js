import React, { useEffect, useState } from "react";
// import Codemirror from "codemirror";
// import "codemirror/mode/javascript/javascript";

const Editor = () => {
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   function init() {
  //     Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
  //       mode: { name: "javascript", json: true },
  //     });
  //   }

  //   init();
  // }, []);

  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
