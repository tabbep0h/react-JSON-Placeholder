import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Post, Main } from './components';
import PostPage from './components/PostPage';


function App() {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  

  const [value1, setValue1] = React.useState('');
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');

  const editPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: value2,
        body: value3,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setPosts(posts.map((item) => (item.id === id ? json : item))));
  };

  const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: value,
        body: value1,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setPosts([...posts, json]));
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    setPosts(posts.filter((item) => item.id !== id));
  };

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchComments = async () => {
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main addPost = {addPost} posts={posts} editPost={editPost} deletePost={deletePost} setValue={setValue} setValue1={setValue1} value = {value} value1 = {value2} />}></Route>
        <Route exact path="post/:id" element={<PostPage  comments = {comments} posts={posts} editPost={editPost} setValue2={setValue2} setValue3={setValue3}  value2 = {value2} value3 = {value3}/>}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
