import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createData, getData } from '../Features/Slice'
import { useNavigate } from 'react-router-dom'


function AddData() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data, edit, loading } = useSelector((state) => ({ ...state.data }))
    const [dataa, setData] = useState({
        title: "",
        author: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createData({ values: dataa }));
        setData({ title: "", author: "" });
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' name="title" value={dataa.title} onChange={(e) => setData({ ...dataa, [e.target.name]: e.target.value })} />
                <input type='text' placeholder='author' name="author" value={dataa.author} onChange={(e) => setData({ ...dataa, [e.target.name]: e.target.value })} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default AddData