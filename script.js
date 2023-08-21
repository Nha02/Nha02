function takeData(){
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var city = document.getElementById('city').value;
            var district = document.getElementById('district').value;
   var regexphone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (phone !== '') {
        if (regexphone.test(phone) == false){
            alert('Số điện thoại của bạn không đúng định dạng!'); event.preventDefault(); return;} 
    } else {
        alert('Bạn chưa điền số điện thoại!');
      event.preventDefault();
      // return;
    }
    var regexmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email !== '') {
        if (regexmail.test(email) == false){
            alert('mail của bạn không đúng định dạng!');
          event.preventDefault();
          return;
    } 
    } else {
        alert('Bạn chưa điền Mail!');
      event.preventDefault();
      return;
    }
   
            var data = '';
            data += '<div>Phone : ' + phone + '</div>';
            data += '<div>Email : ' + email + '</div>';
            data += '<div>City : ' + city + '</div>';
            data += '<div>District : ' + district + '</div>';
            document.getElementById('show').innerHTML = data;
           
   event.preventDefault();
 }