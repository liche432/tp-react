import { createContext} from "react";

// on type le contexte
export const myContext = createContext({
    toto:'',
    setToto: () => {},
    aNumber: 42
})

export const myContextProvider = (props) => {

    const setToto = (toto) => {
        alert (toto)
    }

    return (
        // on créer une balise pour avoir le retour du jsx dans l'app
        <myContext.Provider value = {{
            toto: 'toto',
            setToto: setToto,
        }}>
            {/* Il sert juste a encadrer une partie de l'app */}
            {props.children}
        </myContext.Provider>
    )
}