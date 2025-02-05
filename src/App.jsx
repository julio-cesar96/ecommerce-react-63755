import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = doc(db, "items", "qvbRDrZTFWzERaasoI3A");
    getDoc(itemsRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts({ id: snapshot.id, ...snapshot.data()});
      }
    });
  }, []);

  return (
    <>
      {console.log(products)};
    </>
  )
}

export default App





