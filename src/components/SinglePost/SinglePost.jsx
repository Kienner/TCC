import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import './SinglePost.scss';


const SinglePost = () => {
  const { postId } = useParams(); // Obtendo o ID do post da URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDocRef = doc(db, 'posts', postId);
        const postDocSnap = await getDoc(postDocRef);
        if (postDocSnap.exists()) {
          setPost({
            id: postDocSnap.id,
            title: postDocSnap.data().title,
            postText: postDocSnap.data().postText,
            imageUrl: postDocSnap.data().imageUrl
          });
        } else {
          console.log('Nenhum documento correspondente encontrado!');
        }
      } catch (error) {
        console.error('Erro ao buscar post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='WrapperSinglePost'>
       {post.imageUrl && (
        <div className="image">
          <img src={post.imageUrl} alt="Imagem do post"/>
        </div>
      )}

      <div className="Post">
     
        <h1>{post.title}</h1>
        <p>{post.postText}</p>
       

      </div>
      
     
    </div>
  );
};

export default SinglePost;
