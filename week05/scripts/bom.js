const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function () {
    //code here when the button is clicked
    if (input.value.trim() !== "") {

    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
    }
    else {
        alert('Please, enter a valid value')
        input.focus();
    }
    
})

function displayList(item){
    
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    
    //Since is not inside a function, the 'X' will show up
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener("click", () => {
        li.remove();
        deleteChapter(li.textContent)
        input.focus();
    })
}

function setChapterList(){
    localStorage.setItem("myFavBOMList",JSON.stringify(chaptersArray) )
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character which is the ❌
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
}





