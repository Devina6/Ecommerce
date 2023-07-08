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
   switch(obj.category){
        case "Beauty":{
            var parentElem = document.getElementById('Beauty');
            break;
        }
        case "Clothing":{
            var parentElem = document.getElementById('Clothing');
            break;
        }
        case "Electronics":{
            var parentElem = document.getElementById('Electronics');
            break;
        }
        case "Food":{
            var parentElem = document.getElementById('Food');
            break;
        }
        case "Health":{
            var parentElem = document.getElementById('Health');
            break;
        }
        case "Sports":{
            var parentElem = document.getElementById('Sports');
            break;
        }
        case "Travel":{
            var parentElem = document.getElementById('Travel');
            break;
        }
        default:{
            var parentElem = document.getElementById('listOfProducts');
        }
    }
    
    var childElem = document.createElement('li');
    childElem.className = 'productDetails';
    childElem.setAttribute('key',obj.id);
    childElem.textContent = 'Title: '+obj.title+' --- Price: '+obj.price+' --- Description: '+obj.description+' --- Category: '+obj.category;
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
            li.parentNode.removeChild(li);        
            }
    }
}
