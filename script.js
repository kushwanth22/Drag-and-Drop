
var figs = document.getElementsByTagName('figure');
var count = 1;
for(var i=0;i<figs.length;i++){
  figs[i].addEventListener('dragstart',function(event){
  event.dataTransfer.setData('img_id', this.getAttribute('id'));
  }) ;
}

document.getElementById('divCntr').addEventListener('dragover',function(event){
  event.preventDefault();

});
document.getElementById('divCntr').addEventListener('drop',function(event){
  var img_id = event.dataTransfer.getData('img_id'),
      img_src = document.getElementById(img_id).firstElementChild.getAttribute('src'),
      caption = document.getElementById(img_id).lastElementChild.innerHTML,
      img_html = '<figure><img style="width:100px;" src="'+img_src+'"/><button id="btn'+count+'" >X</button><figcaption>'+caption+'</figcaption></figure>';
      
      document.getElementById('divCntr').insertAdjacentHTML('beforeend',img_html);
      document.getElementById("btn"+count).onclick = function(){
         this.parentNode.remove();
         // console.log(count);
    }; 
        count++;
});

