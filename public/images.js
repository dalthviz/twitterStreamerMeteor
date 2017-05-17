//Based on http://stackoverflow.com/a/31657234
$('#save_image_locally').click(function(){
   html2canvas(document.body,
   {
     onrendered: function (canvas) {
       var a = document.createElement('a');
       // toDataURL defaults to png
       a.href = canvas.toDataURL();
       a.download = 'tweetsImage.png';
       a.click();
     },
      allowTaint: true
   });
 });
