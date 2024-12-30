import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js"

    const today=dayjs();
    const dateString=today.format('D MMMM')

let html=JSON.parse(localStorage.getItem('html')) || `
        <section class="input-section js-input-section js-input-section-1" data-input-id="1">
            <textarea name="note1" id="note1" class="js-my-text js-my-text-1" data-input-id="1"></textarea>
            <div class="date js-date js-date-1">${dateString}</div>
            <div title="delete" class="delete-icon js-delete-icon js-delete-icon-1" data-input-id="1"><i class="fa-regular fa-trash-can"></i></div>            
        </section>`;


document.querySelector(".js-create-btn").addEventListener('click',()=>{

    const inputId = Math.random().toString().replace('.', '_');
    
    html+=`
        <section class="input-section js-input-section js-input-section-${inputId}" data-input-id=${inputId}>
            <textarea name="note1" id="note1"  class="js-my-text js-my-text-${inputId}" data-input-id=${inputId}></textarea>
            <div class="date js-date js-date-${inputId}">${dateString}</div>
            <div title="delete" class="delete-icon js-delete-icon js-delete-icon-${inputId}" data-input-id=${inputId}><i class="fa-regular fa-trash-can"></i></div>            
        </section>`
        
    document.querySelector(".js-text-container").innerHTML=html;

    addDelete();
    addInputSave();
    

    localStorage.setItem('html',JSON.stringify(html));
});

document.querySelector(".js-text-container").innerHTML=html;


function addDelete(){

    document.querySelectorAll('.js-delete-icon').forEach((element)=>{
        element.addEventListener('click',()=>{
            const inputId=element.dataset.inputId
            document.querySelector(`.js-input-section-${inputId}`).remove()
            html = document.querySelector(".js-text-container").innerHTML;
            localStorage.setItem('html',JSON.stringify(html));        
        });
    });
}

addDelete();

function addInputSave(){
    document.querySelectorAll('.js-input-section').forEach((element)=>{
        element.addEventListener('input',()=>{
            const inputId=element.dataset.inputId;
                const myText= document.querySelector(`.js-my-text-${inputId}`).value;
                document.querySelector(`.js-my-text-${inputId}`).innerHTML=myText;        
                
                html = document.querySelector(".js-text-container").innerHTML;
                localStorage.setItem('html',JSON.stringify(html));
        });
    });
}

addInputSave();


