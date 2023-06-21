import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, deleteData } from '../Features/Slice';
import { Link } from 'react-router-dom';

function Index(props) {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.post);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props?.name ? `Welcome - ${props?.name}` : "Login please"}</h2>
      <Link to={'/add'}><button>Add </button></Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
              <Link to={`/edit/${item.id}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
