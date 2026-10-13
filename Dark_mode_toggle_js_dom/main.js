 //MY LOGIC (Initially that came in my mind)

//  const ele=document.getElementById("toggleButton");
// let count=0;
//  function handleClick(){
//     if(count%2==0) {
//        document.body.style.backgroundColor="black";
//        count++;
//     }
//     else if(count%2!=0) {
//         document.body.style.backgroundColor="white";
//         count++;
//     }

//  }
   
//   ele.addEventListener('click', handleClick);



  //or 
//   const ele = document.getElementById("toggleButton");

// let count = 0;

// function handleClick() {

//     if (count % 2 == 0) {
//         document.body.style.backgroundColor = "black";
//         count++;
//     }
//     else {
//         document.body.style.backgroundColor = "white";
//         count++;
//     }
// }

// ele.addEventListener("click", handleClick);





 const btn=document.getElementById("toggleButton");

 btn.addEventListener('click', ()=>{
    if(document.body.classList.contains("dark")) btn.textContent="Toggle to Dark Mode";
    if(!document.body.classList.contains("dark")) btn.textContent="Toggle to White Mode";
    //or
    // else btn.textContent="Toggle to Dark Mode";
    document.body.classList.toggle("dark");
 });




//  One alternative

// If you want the button text to describe the current mode instead of the action it will perform, then toggle first:

// btn.addEventListener('click', () => {

//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark"))
//         btn.textContent = "Dark Mode";
//     else
//         btn.textContent = "Light Mode";
// });