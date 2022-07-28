import { useEffect, useMemo } from "react";
import { useAnayKeyToRender } from "./key-hooks";

export default function WordCount({ childlen = "" }) {
  useAnayKeyToRender();

  const words = useMemo(() => childlen.split(" "), [childlen]);
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{childlen}</p>
      <p>
        <strong>{words.length} - word</strong>
      </p>
    </>
  )
}
