import React, { useState } from "react";
import axios from "axios";
import Spinner from "../components/loading";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [loading , setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image', image);
            console.log('Form Data:', formData);

            const response = await axios.post('http://localhost:3000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Post added successfully', response.data);
            setTitle('');
            setContent('');
            setImage(null);
            
        } catch (error) {
            console.error('Error adding post', error.response.data);
        }
        setLoading(false);
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            {loading ? (
        <Spinner loading={loading} />
      ) : (

        <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="image">Choose Image:</label>
                <input type="file" id="image" name="image" onChange={handleFileChange} accept="image/*" required />
            </div>

            <button type="submit" className="button">Publish</button>
        </form>
      )}
        </div>
    );
        
};

export default PostForm;
