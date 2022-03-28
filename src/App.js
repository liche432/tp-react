import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Test from "./components/Test";

const App = () => {
    const [myVar, setMyVar] = useState('Hello word') // permet de mettre a jour la vue (c'est un hook)
    const [movies, setMovies] = useState([]);


    // let myVar = "hello world"
    const onClickHandler = () => {
        // console.log('clicked');
        // myVar = "Goodbye";
        // console.log = "Goodbye";
      setMyVar('Hello Word updated');

      console.log(myVar); // on sse rend compte qu'il a encore "Hello Word"

      setMyVar((prevState) => {
         return prevState + ' updated'; // il est conseiller d'utiliser cette syntaxe pour travailler avec la dernière version
      });
    }

    const childToParentUpdater = (data) => {
        console.log('childToParentUpdater', data)
    }

    function fetchMoviesHandler(){
        fetch('https://swapi.dev/api/films/') // on récupère des données de ce site
        .then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            setMovies(data.results);
        })
    }

    useEffect(() => {
        //document.title = myVar //on change le titre pour pouvoir toujours l'accès à onClickHandler a la fonction. Sinon, comme il n'y a aucun changement, on y a accès 1 fois
        //console.log('useEffect');
        fetchMoviesHandler();
    }, [myVar]); // on l'utilise pour des appels http

    


    return (
        <div className="App">
            <button onClick = {onClickHandler}>Click Me</button>
            <Test myProps={myVar} updater={childToParentUpdater} /> {/*on appel notre components*/}
            {myVar}
            {[<h1>1</h1>,2,4,5]}
        </div>
    );
}

export default App;
