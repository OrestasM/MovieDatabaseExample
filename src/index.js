import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Movie extends React.Component {

    constructor(props)
        {
            super(props);
            this.state={
                items : [],
                isLoaded: false
            }
        }

    showForm(){
        console.log('Click happened');
    }

    componentDidMount(){

        const url = "http://www.omdbapi.com/?apikey=";
        const apiKey = "429ef71a";
        const search = "&s=";
        const querry = "harry";
        let finalUrl = url+apiKey+search+querry;

        fetch(finalUrl)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.Search
                })

                //console.log(json.Search);
            });

       
    }
    

    render() {
        
        let movies = this.state.items;

        return (
            <div>
                <div>
                    <button onClick={this.showForm}>Click</button>
                </div>
                {movies.map(movie => (
                    <div className="wrapper square" key={movie.imdbID}>
                        <div className="sectiontext">
                            <p>{movie.Title} ({movie.Year})</p>
                        </div>
                        <img className="sectionimage left" alt="" src={movie.Poster}></img>
                    </div>
                ))}
            </div>            
        )}
}

ReactDOM.render(
    <Movie/>,
    document.getElementById('root')
);