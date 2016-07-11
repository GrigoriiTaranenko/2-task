function decomposed(String){
    list=String.split(' ');
    return list[0];
}
var router= {
    spisok: {},
    getSpisok: function(){
        for (var i=0;i<9;i++) {
            var child = document.body.children[i];
            this.spisok[decomposed(child.className)] = child;
        }
    }
};


function delet(first, last) {
    for (i = first; i <= last; i++) {
        //application[i] = document.body.children[first + 1];
        document.body.removeChild(document.body.children[0]);
        //        application.style.display='none'
    }
}



/*router.getSpisok();
delet(1, 9);
windows=new Work(router.spisok.windows, 0);
wind=new Work(router.spisok.authorization, 1);
if (localStorage.getItem('admin') == null) localStorage.setItem('admin', '{"status":"admin"}');
if (localStorage.getItem('!table!')==null) localStorage.setItem('!count!', '{"Name":[], "application":[], "count":0}');*/
router.getSpisok();
delet(1, 9);
head=new Head(router.spisok.windows, 0);
body=new Work(router.spisok.authorization, 1);
if (localStorage.getItem('admin') == null) localStorage.setItem('admin', JSON.stringify({"status":"admin"}));
if (localStorage.getItem('!table!')==null) localStorage.setItem('!table!', JSON.stringify({"Name":[], "application":[], "Comment":[[]], "count":0}));
if (localStorage.getItem('!Performer!')==null) localStorage.setItem('!Performer!',JSON.stringify({"Name":[]}));