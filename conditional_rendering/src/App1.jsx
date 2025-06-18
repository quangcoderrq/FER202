import React from "react";
function MissedGoal(){
    return(
        <h1>miss</h1>
    );
}

function MadeGoal(){
    return(
    <h1>Goal!</h1>
    );
}
function Goal(props){
const isGoal=props.isGoal;
if(isGoal){
    return<MadeGoal/>;
}
return<MissedGoal/>;
}

function App1(){
    return(
        <div>
            <h1>RESULT</h1>
            <Goal isGoal={true}/>
        </div>
    );
}

export default App1;

