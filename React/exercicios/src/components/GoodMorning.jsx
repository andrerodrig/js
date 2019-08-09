import React from 'react'

export default props =>
    //<div>
    //    <h1>Good Morning <b>{props.nome}</b>,{props.nota}!</h1>
    //    <h2><i>Adeus Brother</i></h2>
    //</div>

    <React.Fragment>
        <h1>Good Morning <b>{props.nome}</b>,{props.nota}!</h1>
        <h2><i>Adeus Brother</i></h2>
    </React.Fragment>
    