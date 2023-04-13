import React, { useState } from 'react';
import "./WordCounter.css";

function WordCounter(props) {
    const [input, setInput] = useState("");
    const [letter, setLetter] = useState(0);
    const [word, setWord] = useState(0);
    const [paragraph, setParagraph] = useState(0);
    const countWord = (event) => {
        setInput(event.target.value);
        setLetter(event.target.value.replace(/\s+/g, '').length);
        setWord(event.target.value.trim().match(/\S+/g)?.length || 0);
        // setParagraph(event.target.value.split(/\r?\n/).length || 0);      
        setParagraph(countParagraphs(event.target.value) || 0);
    }
    const countParagraphs = () => {
        const paragraphs = input.split(/\r?\n/);
        let count = 0;
        for (let i = 0; i < paragraphs.length; i++) {
            const firstChar = paragraphs[i].trim()[0];
            if (/\S/.test(firstChar)) {
                count++;
            }
        }
        return count;
    };

    return (
        <div className='container'>

            <h2><span class="material-icons">
                abc
            </span> Word Counter</h2>
            <div className='container_count'>
                <span className='counter'><span class="material-icons">
                    edit_document
                </span> Word: {word} </span>
                <span className='counter'><span class="material-icons">
                    edit
                </span> Letter: {letter}</span>
                <span className='counter'><span class="material-icons">
                    receipt_long
                </span> Paragraph: {paragraph}</span><br />
            </div>
            <textarea name="input" value={input} cols="60" rows="10" onChange={countWord}
            placeholder='Enter/Paste Your Text Here'>
                </textarea><br />
            <button onClick={() => { setInput(input.toUpperCase()) }}>Click to UPPERCASE</button>
            <button onClick={() => { setInput(input.toLowerCase()) }}>Click to LOWERCASE</button>
        </div>
    );
}

export default WordCounter;