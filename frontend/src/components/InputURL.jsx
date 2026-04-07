import './InputURL.css'
import { useState } from 'react'
import axios from 'axios'

const InputURL = () => {
    const [urlInput, setUrlInput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [shortenedURL, setShortenedURL] = useState("");
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if(!urlInput.trim()){
            setError("Please Enter a URL!");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/url`, {
                url : urlInput
            });
            
            const shortId = response.data.id;
            setShortenedURL(`${import.meta.env.VITE_API_URL}/${shortId}`);     
            setUrlInput("");       
        } catch (err) {
            setError(err.response?.data?.message || "Error creating short URL");
        } finally {
            setLoading(false);
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(shortenedURL);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="input-form">
                <div className="input-container">
                    <input 
                        type="text" 
                        className="input-url" 
                        placeholder="Enter URL" 
                        value={urlInput}
                        onChange={(e) => {
                            setUrlInput(e.target.value)
                        }}/>
                    <button
                        className="squeeze-button" 
                        type='submit'
                        > 
                            {loading ? "LOADING..." : "SQUEEZE IT!"}
                    </button>
                </div>
            </form>

            {error && <p className='error'>{error}</p>}

            {shortenedURL && (
                <div className="result-container">
                    <p>Shortened URL:</p>
                    <div className="result-display">
                        <span className="shortened-url">{shortenedURL}</span>
                        <button className="copy-button" onClick={handleCopy}>
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
)}
        </>
    )
}

export default InputURL;