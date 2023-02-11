import React from 'react'
import Post from './Post'
import "../style.css"

function Main({ posts, deletePost, editPost, value, value1, value3, value4, setValue, setValue1, addPost }) {

  return (
    <div>
      <div className='addPost'>
        <h2>Добавить пост</h2>
        <label className='label'>Добавьте заголовок:</label>
          <input onChange={(e) => setValue(e.target.value)} />
        <br></br>
        <label className='label'>Добавьте текст:</label>
          <input onChange={(e) => setValue1(e.target.value)} />
        <br></br>
          <button onClick={addPost}>Добавить</button>
      </div>
    <div className='grid'>
        {
          posts.map((post, index) => (
            <Post key = {`${post.id}_${index}`}
              id={post.id}
              userId={post.userId}
              title={post.title}
              editPost={editPost}
              deletePost={deletePost}
              body={post.body}
            ></Post>
          ))
        }
      </div>
    </div>
  )
}

export default Main