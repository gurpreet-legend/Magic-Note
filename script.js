console.log("Hello");


let notesList = document.querySelector(".notes-list")
let addBtn = document.querySelector(".addbtn");
let count = 1;


addBtn.addEventListener("click", function (e) {

    let textarea = document.querySelector("textarea");
    console.log(textarea.value);

    if (notesList.childElementCount == 0 ) {
        count = 1;
    }
    let new_note = document.createElement("div");
    new_note.className = "notes";
    new_note.setAttribute("id", `noteNo${count}`)
    new_note.innerHTML = `<h3 class="note-heading">Note ${count}</h3>
    <p class="note-para">${textarea.value}</p>`;

    let del_btn = document.createElement("button");
    del_btn.className = "del-btn";
    del_btn.innerText = "Delete Note";
    new_note.appendChild(del_btn);

    notesList.appendChild(new_note);

    textarea.value = "";
    count++;
    del_btn.addEventListener("click", () => {
        notesList.removeChild(new_note);
    })

    let clearbtn = document.querySelector(".clearbtn");
    clearbtn.addEventListener("click", () =>{
        notesList.innerHTML = "";
    })

    
});
