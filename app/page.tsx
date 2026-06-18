"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://helpline.sharepoint.com/sites/GroupamaTECHS/_api/web/lists/getbytitle('Test Elo')/items",
      {
        method: "GET",
        headers: {
          Accept: "application/json;odata=verbose",
        },
        credentials: "include", // 🔥 IMPORTANT
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.d.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard IT 🚀</h1>

      {data.length === 0 && <p>Chargement...</p>}

      {data.map((item) => (
        <div key={item.Id} style={{ border: "1px solid", margin: 10, padding: 10 }}>
          <h3>{item.Title}</h3>
        </div>
      ))}
    </div>
  );
}