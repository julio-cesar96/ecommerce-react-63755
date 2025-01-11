import { useState, useEffect } from "react";

/* 
1 - preciso fazer uma chamada http a uma api externa dentro desse meu componente quando ele for montado.

2 - apos fazer a requisão, eu preciso iterar sobre os dados vindo da API para renderizar no nosso componente
*/

function ListaDePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }

    fetchPosts();
  }, []);
   
  return (
    <>
      <ul>
        {posts.map((post) => (
          <>
          <li key={post.id}>{post.title}</li>
          </>
        ))}
      </ul>
    </>
  )
}

export default ListaDePost;
