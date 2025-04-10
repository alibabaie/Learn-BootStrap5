//  Basic &  Stacking & Placement

 const toastElList = document.querySelectorAll('.toast')
 const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, {
     animation: true ,
     autohide: false ,
     delay: 3000   
 } ))

 toastList.forEach(
     function (toast){
         toast.show();
     }
 );

// Live example

 document.getElementById('liveToastBtn').onmouseover = function () {
     var toastEl = document.querySelector('#liveToast');
     var myToast = new bootstrap.Toast(toastEl, {
          animation: true ,
          autohide: false ,
             delay: 3000   
      });
      myToast.show(); 
 }