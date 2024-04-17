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
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    // Exibir prévia da imagem
    const reader = new FileReader();
    reader.onload = () => {
      setImgURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadAndCreatePost = async () => {
    if (!imageFile) return;

    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        try {
          // Obtém a URL da imagem após o upload
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          // Cria o post no Firestore com a URL da imagem
          const docRef = await addDoc(collection(db, "posts"), {
            title,
            postText,
            imageUrl: url,
            author: { name: auth.currentUser.email, id: auth.currentUser.uid }
          });
          console.log("Post criado com ID:", docRef.id);

          // Redireciona após criar o post
          navigate("/");
        } catch (error) {
          console.error("Erro ao criar post:", error);
        }
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleUploadAndCreatePost();
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
            <input type='file' onChange={handleFileChange} />
          </div>
          {imgURL && <img src={imgURL} alt='imagem' style={{ maxWidth: "100px" }} />}
          <button type='submit'>Publicar</button>
        </div>
      </form>
      {progress > 0 && progress < 100 && <progress value={progress} max="100" />}
    </div>
  );
}

export default CadastrarAtt;
