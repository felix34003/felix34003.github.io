const shareButton=document.getElementById('share-card');
const shareStatus=document.querySelector('.share-status');
shareButton.addEventListener('click',async()=>{
 const url=new URL('./',location.href).href;
 try{
  if(navigator.share){await navigator.share({title:'Felix D. Gonzalez',text:'Engineering, projects, and ways to connect.',url});shareStatus.textContent='';}
  else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);shareStatus.textContent='Link copied.';}
  else{shareStatus.textContent='Share this address: '+url;}
 }catch(error){if(error.name!=='AbortError')shareStatus.textContent='Share this address: '+url;}
});
