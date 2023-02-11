import React from 'react'
import Post from './Post'
import "../style.css"
import { Link, useParams } from 'react-router-dom'

function PostPage({ comments,posts,setValue2,setValue3,editPost }) {

  const params = useParams()
  const id = params.id

  const postArr = posts.filter((item) => item.id == id)
  const post = postArr[0]

  const commentsARR = comments.filter((item) => item.postId == id)

  return (

    <div className='addPost'>
      <Link to='/'>
        <button  className='bt'>На главную</button>
    </Link>
      <Post isOnePage = {true} title = {post.title} body = {post.body} id = {post.id}></Post> 
      <div className='comments'>
        <h2 className='titleC'>Комментарии:</h2>
        {
          commentsARR.map((item,index) => (
            <div className='comment'>
              <p>Пользователь:{item.email}</p>
              <div className='comment_body'>
                <p className='titleT'>{item.name}</p>
                <p className='body-text'>{item.body}</p>
              </div>
            </div>
            
          ))
        }
      </div>
      <div className='addPost'>
        <h2>Редактировать пост</h2>
        <label className='label'>Добавьте заголовок:</label>
          <input onChange={(e) => setValue2(e.target.value)} />
        <br></br>
        <label className='label'>Добавьте текст:</label>
          <input onChange={(e) => setValue3(e.target.value)} />
        <br></br>
          <button onClick={editPost(id)}>Редактировать</button>
      </div>
    </div>
  ) 
}

export default PostPage