import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function Post({ title, body, id, deletePost,isOnePage = false }) {
  return <div className='post-block'>
    <h2 className='title'>{title}</h2>
    <p className='body-text'>{body}</p>
    <span className='id'>{id}</span>
    { !isOnePage && 
    <div style={{"display":"flex","flexDirection":"column"}}>
    <Link to={`post/${id}`}>
        <button>Подробнее</button>
    </Link>
    <button style={{"width":"100px","backgroundColor":"red"}} onClick={() => deletePost(id)}>Удалить пост</button> 
    </div>
    }
    
  </div>;
}

export default Post;
