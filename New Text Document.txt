

function getcurrenttaburl (callback)
{
    var  queryinfo= {
        active: true ,
        currentwindow : true
    };
    chrome.tabs.query ( queryInfo , (tabs)=>{
        var tab=tabs[0] ;
        var url=tab.url ;
        document.getElementById("Get URL").onclick = alert(url);
        console.assert( typeof url =='string' , 'tab.url should be astring');
        callback(url);
    });

}

function preview () {
    var script = document.getElemetById ("sidebar").style.display= "none" ;
    chrome.tabs.executeScript({
        code:script 
    });
}

function print ()
{
    var script = print();
    chrome.tabs.executeScript({
        code:script
    }

    );

}


document.addEventListener ( 'DOMContentloaded ' ,()=>{
    getCurrentTabUrl ((url) => {
        var print_btn = document.getElementById("print");
        print_tab.addEventListener(click , () => {
            preview();
            print();
        });
    });
})



    

