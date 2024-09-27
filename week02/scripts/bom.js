const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click",function(){
    //code here when the button is clicked
    if (input.value.trim() !== "") 
        {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
    
        //Since is nit inside a function, the 'X' will show up
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
    
        deleteButton.addEventListener("click", () => {
            li.remove();
            input.focus();
        })
    
        input.value = " ";
        input.focus();
    }
    else 
    {
        alert('Please, enter a valid value')
        input.focus();
    }

} )

