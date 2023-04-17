let userInput=document.querySelector("#Input");
let addBtn=document.querySelector("#addBtn");
let tBody=document.querySelector(".tableBody");


let userData=[

]
if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify(new Array()))
}
let lenghtOfData=JSON.parse(localStorage.getItem("todos"));
let userId=lenghtOfData.length;

let showData=()=>{
    tBody.innerHTML="";

    let dataGet=JSON.parse(localStorage.getItem("todos"));

    dataGet.forEach((todo, indexNo) => {
           tBody.innerHTML+=`
          <tr>
              <td>${todo.id}</td>
              <td>${todo.todo}</td>
               <td>
              <button id="editBtn">EDIT</button>
              <button id="deleteBtn" onclick="todoDelete(${todo.id})">DELETE</button>
              </td>
           </tr>`     
    });
 }

let todoDelete=(id)=>{
    let dataGet=JSON.parse(localStorage.getItem("todos"));
    let storeFilterData=dataGet.filter((todo)=> todo.id!==id);
    localStorage.setItem("todos",JSON.stringify(storeFilterData));
    showData();
}

 showData()

addBtn.addEventListener("click",()=>{

    userId++;
    let userInputValue=userInput.value;
    userInput.value="";
    let storageValueGet=JSON.parse(localStorage.getItem("todos"));
    storageValueGet.push({
        id:userId,
        todo:userInputValue
    })
    localStorage.setItem("todos",JSON.stringify(storageValueGet))
    showData()
})