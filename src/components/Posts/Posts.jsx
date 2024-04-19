import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './Posts.scss';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import './Posts.scss';


const Posts = () => {

  const [postLists, setPostsList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollectionRef = collection(db, "posts");
        const querySnapshot = await getDocs(postsCollectionRef);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          postText: doc.data().postText, 
          imageUrl: doc.data().imageUrl,
          summary: doc.data().summary // Adicionando o resumo
        }));
        setPostsList(postsData);
      } catch (error) {
        console.error('Erro ao obter posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (    

    <>
    <Header/>
    
    <div className='WrapperPosts'>
      {postLists.map(post => (
        <Link to={`/single-post/${post.id}`} className="Post" key={post.id}>
          {post.imageUrl && (
              <img src={post.imageUrl} alt="Imagem do post" />
          )}
          <h2>{post.title}</h2>
          <p>{post.summary}</p> 
         
        </Link>
      ))}
    </div>

    </>
  );
};

export default Posts;
