import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const useItemCollection = (collectionName, itemId) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const db = getFirestore();
    const item = doc(db, collectionName, itemId);
    getDoc(item)
      .then((snapshot) => {
        setData({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);
  return { data, loading };
};
