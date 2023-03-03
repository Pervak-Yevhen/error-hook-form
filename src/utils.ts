import { useEffect, useState } from "react";

function useData(url = "pikachu") {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    console.log("---");
    console.log("ignore", ignore);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(ignore);
        if (!ignore) {
          console.log("setData");
          setData(json);
        }
      });
    return () => {
      console.log("b");
      ignore = true;
    };
  }, [url]);
  return data;
}

export default useData;
