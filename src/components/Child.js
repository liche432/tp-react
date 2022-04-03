import {userContext} from "react" ;
import {myContext} from "../store/Store"

const Child = () => {
    const ctx = userContext(myContext);
    ctx.setToto('toto');

    return(
        <div>
            <h1>Child Component</h1>
            <p> This is a child component</p>
            <p>{ctx.name}</p>
        </div>
    )
}