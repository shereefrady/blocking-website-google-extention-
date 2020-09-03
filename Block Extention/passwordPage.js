



document.getElementById("passwordbtn").onclick=function(){


      var  password =document.getElementById("password").value;
     
      var blockpassword="";
      
     


      chrome.storage.sync.get(["currentTabURL","Password","valid"], function(result){
       
          myurl=result.currentTabURL;
          blockpassword=result.Password;

          if(password==blockpassword)
            {                
                
                
                chrome.storage.sync.set({"valid":true});
                chrome.tabs.update({url:myurl});

                var notifoptions={
                    type:"basic",
                    iconUrl:'Block-512.png',
                    title:'log in presmission ',
                    message:'Now you can browse this site sir !'
            
                }
                chrome.notifications.create('changPwdNotifyID',notifoptions);

            }  
            else
            {
               
                chrome.storage.sync.set({"valid":false});
                chrome.tabs.update({url:"passwordPage.html"});
                var notifoptions={
                    type:"basic",
                    iconUrl:'Block-512.png',
                    title:'Wrong password',
                    message:'the password is wrong !'
            
                }
                chrome.notifications.create('changPwdNotifyID',notifoptions);

                
            } 
      
       });

      
       
     
  };