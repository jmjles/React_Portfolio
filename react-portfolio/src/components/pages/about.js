import React from 'react';
import Resume from '../../assets/etc/Resume.pdf'
import Portrait from '../../assets/pics/portrait.jpg'
import ani from '../animeGallery'
function About(){
    return(
        <article>
            <h1>
                A Little Bit About Me
            </h1>
            <hr/>
            <img id="portrait" src={ Portrait } alt="A portrait of Jesus M."/>
            <br/>
            <p>
                When I was a kid, I always loved building models and taking apart electronics.
                I started learning about all the hardware of computers when I was in middle school.
            </p>
            <p>
                One day, I signed up for two classes; one was focused on Adobe Suites and the other on Java.
                I was <b>in love</b> with the idea that could create virtually anything with a few lines of code.
            </p>
            <p>
                I came across Udacity as I was getting frustrated at the thought that the college I was attending didn't have any programming classes.
                I've decided to drop college and proceed my dreams of becoming a Full-Stack Developer!
            </p>
<<<<<<< HEAD
            <h2>
                My Resume
            </h2>
            <hr/>
            <a onClick={(e,reverse)=>{let text = e.target.innerHTML;if(text === 'Show') reverse=true;else reverse=false;ani.pdfAni(reverse);}} className="btn-lg btn-primary" id="btnSH">Show</a>
            <a href={Resume} download="Jesus-Morales-Resume" className="btn-lg btn-primary" id="downloadR">Download</a>
            <br/>
            <br/>
            <object className="pdf"data={Resume} type="application/pdf" width="100%" height="0">
            <embed src={Resume} type="application/pdf"/>
            </object>
        </article>
    )
}
=======
            <article id="resumeSection">
                <h1>
                    My Resume
                </h1>
                <hr/>
                <button onClick={ani} className="btn-lg btn-primary" id="btnSH">Show</button>
                <a href={Resume} download="Jesus-Morales-Resume" className="btn-lg btn-primary" id="download">Download</a>
                <br/>
                <br/>
                <object className="pdf"data={Resume} type="application/pdf" width="100%" height="0">
                <embed src={Resume} type="application/pdf"/>
                </object>
            </article>
        </article>
    )
}
let i = 0;
function ani() {
    
    if (i === 0){
        anime({
            targets:'.pdf',
            height: [0, 1200],
            duration: 1000,
            easing: 'linear'
        });
        i++;
        document.getElementById('btnSH').innerHTML='Hide';
        return(
        i
        )
    } else{
        anime({
            targets:'.pdf',
            height: [1200, 0],
            duration: 1000,
            easing: 'linear'
        });
        i--;
        document.getElementById('btnSH').innerHTML='Show';
        return(
            i
        )
    }
}
>>>>>>> a476551c75dd7c8f88d2518ee798d8d70837592d
export default About;