const adbtn =document.getElementById("addbtn");
const list=document.getElementById("list");
const input=document.getElementById("iteminput");

function handleClick(){
    if (input.value.trim() === "") {
    alert("INPUT IS EMPTY");
    return;
}

  const li=document.createElement("li");
li.textContent=input.value;
  const delbt= document.createElement("button");

  delbt.textContent="Remove";
  delbt.classList.add("delete");

  delbt.addEventListener('click',function(){
    li.remove();
  });

   li.appendChild(delbt);
   list.appendChild(li);


    //edit feature 
   li.addEventListener("dblclick", function () {

        // Don't start editing if already editing
        if (li.classList.contains("editing")) {
            return;
        }

        li.classList.add("editing");

        const oldText = li.firstChild.textContent;

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = oldText;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        li.firstChild.replaceWith(editInput);

        li.insertBefore(saveBtn, delbt);
        

        saveBtn.addEventListener("click", function () {

            if (editInput.value === "") {
                alert("INPUT IS EMPTY");
                return;
            }
            const newText = document.createTextNode(editInput.value);

            editInput.replaceWith(newText);

            saveBtn.remove();

            li.classList.remove("editing");
        });
    });  //

    input.value = "";
}

adbtn.addEventListener('click',handleClick);


