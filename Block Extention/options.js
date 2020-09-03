document.getElementById("changepassbtn").onclick=function(){
var oldpwd=document.getElementById("oldpassword").value;
var newpwd=document.getElementById("newpassword").value;




chrome.storage.sync.get("Password",function(result){
   
   if(oldpwd==result.Password)
   {
    chrome.storage.sync.set({'Password':newpwd},function(){
        close();
    });

    var notifoptions={
        type:"basic",
        iconUrl:'Block-512.png',
        title:'change password',
        message:'you have change password successfully !'}

       
    chrome.notifications.create('changPwdNotifyID',notifoptions);

   }


   else
   {
    var notifoptions={
        type:"basic",
        iconUrl:'Block-512.png',
        title:'change password',
        message:'old password is wrong !'

    }
    chrome.notifications.create('changPwdNotifyID',notifoptions);

   }

});







   
};