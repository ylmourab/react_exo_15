import React,{useState} from 'react'

function Article(props) {
    const [title,setTitle] = useState(props.titre)
    return (
        <div>
            <h1>
            {title.map(e =>{
                return `${e.titre}  `
            })}
            </h1>
            
            
        </div>
    )
}

export default Article
