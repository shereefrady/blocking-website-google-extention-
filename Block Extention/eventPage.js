

    chrome.storage.sync.set({"Password":1234567}); 
    
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        
        
        chrome.storage.sync.get(["valid"],function(result){
            
            
               //alert(result.valid+"fome event page");
              if(tab.url.includes('facebook'))
                  {
                    if(result.valid==false || result.valid==undefined)
                      {
           
                          chrome.storage.sync.set({"currentTabURL":tab.url});
                          chrome.tabs.update({url:"passwordPage.html"});
                       }
     
      }  
        
        });


     });  
     

     

  
    
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

       chrome.storage.sync.get("Password",function(result){
            if(result.Password==undefined)
            {
                chrome.storage.sync.set({"Password":1234567}); 
            }

        });

        
        
        chrome.storage.sync.get(["valid"],function(result){
           
              if(tab.url.includes('facebook'))
                  {
                    if(result.valid==false || result.valid==undefined)
                      {
           
                          chrome.storage.sync.set({"currentTabURL":tab.url});
                          chrome.tabs.update({url:"passwordPage.html"});
                       }
     
                  }  
        
        });


     });  
     





     
    