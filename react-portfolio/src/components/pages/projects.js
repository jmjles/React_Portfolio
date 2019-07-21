import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Projects extends Component{
    state = {
        projects: [
            { name: 'Location Lookup', Description : 'Get The latest news, weather and map of a location with a simple search.', link: '/projects/location'},
            { name: 'Clicker Game', Description : 'Click on the character to lvl up!', link: '/projects/clicker'},
            { name: 'MERN Stack', Description : 'You are using it :)', link: '/'}
        ]
    }

    render(){
        return(
            <article>
                <div className="row">
                    {this.state.projects.map((project) => (
                        <div className="col-sm" key ={project.name}>
                            <div className="project">
                                <h2 className="text-center"> { project.name }</h2>
                                <p>{ project.Description}</p>
                                <br/>
                                <Link to={ project.link } className="btn-secondary btn">Try Me</Link>
                                <hr/>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </article>
        );
    }
    
}

export default Projects;