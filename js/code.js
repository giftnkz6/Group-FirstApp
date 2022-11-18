
const names = [];


display.addEventListener('click', function display(f){
    // alert("Show")
    // console.log("name")
    f.preventDefault();
    console.clear();
    console.table(names);

})

function addNames() {
    let myNames = document.getElementById("name").value;
    names.push(myNames)
    alert("Name added")
    
}