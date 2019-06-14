// //PWA
if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('../sw.js').then(()=>{
    console.log('Instalacion exitosa');
 }, (err)=> {
    console.log('Instalacion fallida: ' + err);
 });
}  
