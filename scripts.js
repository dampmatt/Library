const form=document.getElementById("form-data");
const addBook=document.getElementById("newBookBtn")
const subBtn=document.getElementById("formSmtBtn")


bookStack=[]
book=function(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

addBook.addEventListener("click", function () {
    form.style.display = "block";
});

addBookCard=()=>{
    const ele=document.createElement('div');
    var attr1=document.createElement('p');
    var attr2=document.createElement('p');
    var attr3=document.createElement('p');
    var attr4=document.createElement('p');
    var attr5=document.createElement('div');

    attr1.innerHTML="<span>Name: </span> <div>" + bookStack[bookStack.length-1].title+"<div>"; 
    ele.appendChild(attr1)

    attr2.innerHTML="<span>Author: </span> <div>"+ bookStack[bookStack.length-1].author+"<div>"; 
    ele.appendChild(attr2)

    attr3.innerHTML="<span>Pages: </span> <div>" + bookStack[bookStack.length-1].pages+"<div>";
    ele.appendChild(attr3)

    attr4.innerHTML="<span>Read: </span> <div class='ifReadCheck'>" + bookStack[bookStack.length-1].read+"<div>";
    attr4.id='read-block'; 
    ele.appendChild(attr4)


    attr5.className="card-btn";
    attr5.innerHTML='<i class="fa-solid fa-trash"></i>';   
    // attr5.id=bookStack.length-1
    ele.appendChild(attr5);
    ele.className='card-items';
    // ele.id='book' + (bookStack.length + 1);
    document.querySelector(".main-body").appendChild(ele);
    
    cards=document.querySelectorAll('.card-btn');
    cards.forEach(element => {    
        element.addEventListener("click",function(){
            console.log(element.id);
            element.parentNode.remove();
        });

    });
    ifReadVal=document.querySelectorAll('.ifReadCheck');
    ifReadVal.forEach(ele => {    
        ele.addEventListener("click",function(){
            console.log(ele.textContent)
            if(ele.textContent=="yes"){
                ele.textContent="no";
            }
            else if(ele.textContent=="no"){
                ele.textContent="yes";
            }
        });
    });



}

subBtn.addEventListener("click",function(){
    tit=document.getElementById("title").value;
    aut=document.getElementById("author").value;
    pgs=document.getElementById("pages").value;
    if(document.getElementById("yes").checked){
        ifRead="yes";
    }
    else{
        ifRead="no";
    }
    bookInfo=new book(tit,aut,pgs,ifRead);
    // console.log(bookInfo);
    form.reset();
    form.style.display = "none";

    bookStack.push(bookInfo);
    // console.log(bookStack);

    
    addBookCard();

})  

formInfo=document.querySelector