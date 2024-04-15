import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth, storage } from '../../services/firebaseConfig';
import { useNavigate } from "react-router-dom";

function CadastrarAtt() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = async (event) => {
    event.preventDefault();
    const files = event.target[2]?.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      error => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgURL(url);
        });
      }
    );
  };

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleUpload(event);
    await createPost();
  };

  const createPost = async () => {
    if (auth.currentUser) {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        imgURL, // Incluindo o URL da imagem no documento do post
        author: { name: auth.currentUser.email, id: auth.currentUser.uid }
      });
      // Navega para a página inicial após a criação do post
      navigate("/");
    } else {
      // Usuário não autenticado, redireciona para a página de login
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Patch Notes Brazil Time Odyssey</h1>
      <form onSubmit={handleSubmit}>
        <div className="InputsContainer">
          <div className="InputSingle">
            <label htmlFor="titulo">Título da Patch Notes</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div className="InputSingle">
            <label htmlFor="titulo">Post</label>
            <textarea onChange={(event) => setPostText(event.target.value)}></textarea>
          </div>
          <div className="InputSingle">
            <label htmlFor="imagem">Imagem</label>
            <input type='file' />
          </div>
          <button type='submit'>Publicar</button>
        </div>
      </form>
      {!imgURL && <progress value={progress} max="100" />}
      {imgURL && <img src={imgURL} alt='imagem' />}
    </div>
  );
}

export default CadastrarAtt;
