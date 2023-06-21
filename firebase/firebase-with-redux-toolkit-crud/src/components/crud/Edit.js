import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, updateData } from '../Features/Slice';

function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  const { data, loading } = useSelector((state) => state.post);
  const [editData, setEditData] = useState({
    title: "",
    author: ""
  });
console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData({ id, ...editData }));
    alert("Data edited");
    navigate('/');
  };

  useEffect(() => {
    dispatch(getData(id));
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='title'
          name="title"
          value={editData.title}
          onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })}
        />
        <input
          type='text'
          placeholder='author'
          name="author"
          value={editData.author}
          onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Edit;
