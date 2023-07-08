window.addEventListener("DOMContentLoaded",async()=>{
    let response = await axios.get('http://localhost:3333/');
    
    for(var i=0;i<response.data.length;i++){
        printOnScreen(response.data[i]);
    }
    })

var productList = document.getElementById('listOfProducts');
productList.addEventListener('click',removeItem);

async function details(){
    let obj = {
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        description:document.getElementById("description").value,
        category:document.getElementById("category").value
    };
    
    let res = await axios.post('http://localhost:3333/add-product', obj)
    printOnScreen(res.data)
}

function printOnScreen(obj){
    var parentElem = document.getElementById('listOfProducts');
    var childElem = document.createElement('li');
    childElem.className = 'productDetails';
    childElem.setAttribute('key',obj.id);
    childElem.textContent = 'Title: '+obj.amount+' --- Price: '+obj.price+' --- Description: '+obj.description+' --- Category: '+obj.category;
    parentElem.appendChild(childElem);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);   
       
}

async function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            const key = li.getAttribute('key');
            let url = 'http://localhost:3333/delete/'+key;
            let res = await axios.get(url);
            console.log(res)
            productList.removeChild(li);            
            }
    }
}
