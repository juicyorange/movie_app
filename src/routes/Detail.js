import React, { useEffect } from "react";

function Detail({ location, history }) {

    useEffect(() => {
        if(location.state === undefined){
            history.push("/");
        }
    })
    return <span>{location.state.title }</span>
}

export default Detail;