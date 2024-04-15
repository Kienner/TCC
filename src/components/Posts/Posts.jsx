import React, { useEffect, useState } from 'react';
import './Posts.scss';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

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
          imageUrl: doc.data().imageUrl // Assumindo que imageUrl é o campo onde está armazenado o URL da imagem
        }));
        setPostsList(postsData);
      } catch (error) {
        console.error('Erro ao obter posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (    
    <div>
      {postLists.map(post => (
        <div className='PostContainer' key={post.id}>
          <div className="Post">
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div>   
              <p>{post.postText}</p>
            </div>
            {post.imageUrl && (
              <div className="image">
                <img src={post.imageUrl} alt="Imagem do post" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
