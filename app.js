const main =document.querySelector('.main')
const col =document.querySelector('.col'),
    row=document.querySelector('.row'),
    rowre=document.querySelector('.row-re'),
    colre=document.querySelector('.col-re'),
    gap=document.querySelector('.gap'),
    grow=document.querySelectorAll('.grow'),
    box=document.querySelectorAll('.box'),
    f=document.getElementById('f'),
    btn=document.querySelectorAll('.btn'),
    direction=document.querySelectorAll('.direction'),
    everyBtn=document.querySelectorAll(".everyBtn")


function removeHover(index1){
    direction.forEach((element,index) => {
        if(index===index1){
            element.classList.add('btn__clicked')
        }
        else{
            element.classList.remove('btn__clicked')
        }
    });
}
function removeevery(){
    everyBtn.forEach((element,index)=>{
       
            element.classList.remove('btn__clicked')
        }
    )
}
function removeGrow(){
    box.forEach((element,index)=>{
        if(element.classList.contains('flexgrow')){
            element.classList.remove('flexgrow')
        }
    })
}

 left =document.querySelector('.left')
console.log(left);

main.addEventListener('click',()=>{
    if(left.classList.contains('display-flex')){
        left.classList.remove(...left.classList)
        left.classList.add('left')
        main.classList.remove('btn__clicked')
        removeGrow();
        removeevery();
    }
    else{
        left.classList="left display-flex"
        main.classList.add('btn__clicked')
        removeevery();
        removeGrow();
    }

 
  
   
})

row.addEventListener('click',()=>{
    removeHover(0);
    if(left.classList.contains('gap')){
        left.classList=" display-flex direction-row left gap "
    }
    else{
        left.classList="display-flex direction-row left "
    }
  

})
col.addEventListener('click',()=>{
    removeHover(1);
    if(left.classList.contains('gap')){
        left.classList="display-flex direction-col left gap "
    }
    else{
        left.classList="display-flex direction-col left "
    }
  
   
})
rowre.addEventListener('click',()=>{
    removeHover(2);
    if(left.classList.contains('gap')){
        left.classList="display-flex direction-row-reverse left gap "
    }
    else{
        left.classList="display-flex direction-row-reverse left "
    }
  
})
colre.addEventListener('click',()=>{
    removeHover(3);
    if(left.classList.contains('gap')){
        left.classList="display-flex direction-col-reverse left gap "
    }
    else{
        left.classList="display-flex direction-col-reverse left "
    }
  
})
gap.addEventListener('click',()=>{
   left.classList.toggle("gap")
   gap.classList.toggle("btn__clicked")
})


grow.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        console.log(index);
       box[index].classList.toggle('flexgrow');
       grow[index].classList.toggle('btn__clicked')
    })
})
