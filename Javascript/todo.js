let todo=[];
let req=prompt("please enter your request");
while(true) {
    if(req == "quit"){
        console.log("quiting app");
        break;
    }
    if(req == "list") {
        console.log("------------------");
        for(let i=0; i<todo.length ;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    }   
    else if(req == "add") {
        let task = prompt("please enter your task you want to add ");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx=prompt("Enter your last index");
        todo.splice(idx,1);
        console.log("Task deleted");
    }
    else{
        console.log("Enter your right request");
    }
    req=prompt("please enter your request");

}