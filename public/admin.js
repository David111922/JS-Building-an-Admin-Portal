async function main(){
let response = await fetch('http://localhost:3001/listBooks') 
let books = await response.json();
books.forEach(renderBook)
}

 function renderBook(book){
let root = document.querySelector('#root')

let li = document.createElement('li')
li.textContent = book.title;

let quantityInput = document.createElement('input')
quantityInput.value = book.quantity


// ! Your Code Here creates button and makes it clickable
let submitButton = document.createElement('button');
      submitButton.textContent = 'Submit';

      submitButton.addEventListener('click', () => {
        fetch('http://localhost:3001/listBooks',{
        method: 'PATCH',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: book.id,
            quantity: quantityInput.value
        })
         })
        })
      
    li.append(quantityInput, submitButton)
  
    root.appendChild(li);

 }
   
   main();

// .then(response => {
//     // Handle response as needed
//     if (response.ok) {
//         console.log('Quantity updated successfully');
//     } else {
//         console.error('Failed to update quantity');
//     }
// }).catch(error => {
//     console.error('Error:', error);
// });
// });

// // Append quantityInput and submitButton to li
// li.append(quantityInput, submitButton);

// // Append li to root
// root.appendChild(li);
// }

// main();