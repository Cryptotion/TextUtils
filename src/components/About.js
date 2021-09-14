import React, {useState} from 'react'

export default function About() {

//     const[myStyle, setmyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white',
//         border: '2px solid white'
//     })
    let myStyle = {
        color: props.mode ==='dark'?'white':'rgb(36 74 104)',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }
//     const [btntext, setBtnText] = useState("Enable Dark Mode")

//     const toggleStyle = ()=>{
//         if(myStyle.color === 'white'){
//             setmyStyle({

//                 color: 'black',
//                 backgroundColor: 'white'
//             })
//             setBtnText("Enable Light Mode")
//         }
//         else{
//             setmyStyle({

//                 color: 'white',
//                 backgroundColor: 'black'
//             })
//             setBtnText("Enable Dark Mode")

//         }
//     }

    return (
        <div className="container" style={{color: props.mode ==='dark'?'white':'rgb(36 74 104)'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Analyze Your Text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and charcters. Thus it is suitable for writing text with word / character limit.  
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>        
            </div>
        </div>
    )
}
