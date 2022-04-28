function sendEmail(){
    // using for debug. You can press F12 to open console.
    console.log(document.getElementsByClassName('your-name')[0].value)
    console.log(document.getElementsByClassName('email-adress')[0].value)
    console.log(document.getElementsByClassName('phone-number')[0].value)
    console.log(document.getElementsByClassName('message-content')[0].value)

    var name = document.getElementsByClassName('your-name')[0].value;
    var email = document.getElementsByClassName('email-adress')[0].value || 'kanedanozomi@gmail.com';
    var phone = document.getElementsByClassName('phone-number')[0].value || '123123123123';
    var message = document.getElementsByClassName('message-content')[0].value || 'NOT FOUND MESSAGE CONTENT';
    var subject = phone
    window.open("mailto:"+email+'?subject='+subject+'&body='+message)
}