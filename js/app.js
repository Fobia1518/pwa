// //PWA
if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js').then(()=>{
    console.log('Instalacion exitosa');
 }, (err)=> {
    console.log('Instalacion fallida: ' + err);
 });
}  


var url = 'https://randomuser.me/api';

fetch(url, {
  method: 'POST', // or 'PUT'
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));