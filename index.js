function submitData(name, email){
    //console.log('Function submit:',name,email)
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            'Accept':"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('completed',data);
        console.log('id:',data.id)
        const p = document.createElement('p')
        p.textContent = `ID: ${data.id}`
        document.body.appendChild(p);
    })
    .catch(error => {
        console.log('Error', error);

        const p = document.createElement('p');
        p.textContent =`Error: ${error.message}`;
        document.body.appendChild(p)
    })
}

