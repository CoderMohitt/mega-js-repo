import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function load() {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
    }

    load();
  }, [url]);

  return { data };
}

export default useFetch;
