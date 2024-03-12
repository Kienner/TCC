import { initializeApp } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-fQvh9ym1QbeW7roDwKTpzjB7OxuWqXs",
  authDomain: "testedelogin-ea50d.firebaseapp.com",
  databaseURL: "https://testedelogin-ea50d-default-rtdb.firebaseio.com",
  projectId: "testedelogin-ea50d",
  storageBucket: "testedelogin-ea50d.appspot.com",
  messagingSenderId: "665839759271",
  appId: "1:665839759271:web:d2dd8936bed805fc551082",
  measurementId: "G-WY2SLC17HB"
};

const CadastrarUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const handleCreateUser = async () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");

    const newUser = { name, email };
    await addDoc(userCollectionRef, newUser);

    // Atualizar lista de usuários
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Limpar campos de entrada
    setName("");
    setEmail("");
  };

  return (
    <div>
      <input type="text" placeholder='nome' value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleCreateUser}>Criar user</button>

      <ul>
        {users.map(user => (
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CadastrarUser;
