const input = document.querySelector('input')
const btn = document.querySelector('button')
const ol = document.querySelector('ul')
const form = document.querySelector('form')



const todoApp=(e)=>{
    e.preventDefault()
    if (!input.value) {
        alert('Please, open the task')
    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        li.className = 'd-flex align-items-center justify-content-between mt-2 ps-3';
        li.style.backgroundColor = 'rgba(213, 217, 216)';
        li.style.width = '590px';
        input.value = null;

        ol.appendChild(li);

        const input1 = document.createElement('input');
        input1.type = 'checkbox';
        li.appendChild(input1);

        const a = document.createElement('a');
        a.style.width = '200px';
        a.className = 'ms-5';
        li.appendChild(a);
        const icon1 = document.createElement('i');
        icon1.className = 'fa-solid fa-pen-to-square px-2 py-2 bg-success text-light ms-5';
        a.appendChild(icon1);

        const icon2 = document.createElement('i');
        icon2.className = 'fa-solid fa-trash-can px-2 py-2 text-light bg-danger ms-3';
        a.appendChild(icon2);
        icon2.onclick = () => {
            li.remove();
        };

    }
   
    
}
form.addEventListener('submit', todoApp)

