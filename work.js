/**
 *
 * @type {{spisok: {}, getSpisok: router.getSpisok}}
 */
/**
 *
 * @param application
 * @param numer
 * @constructor
 */
function Work(application, numer){
    this.ApplicationClassnName=application.className;
    //var self = this;
    var creation=true;
    var self=document.body.insertBefore(application.cloneNode(true),document.body.children[numer]);
    this.getSelf=function(){
        return self;
    };
    this.getCreation=function(){
        return creation;
    };
    this.delete=function(){
        if (creation) {
            creation=false;
            document.body.removeChild(self);
        }
        else return(alert('объекта нет'))
    };

    this.append=function(numer){
        if (creation) alert('объект уже был создан');
        else {
            creation=true;
            self=document.body.insertBefore(self.cloneNode(true), document.body.children[numer]);
        }
    }
}
/**
 *
 * @param user
 */
Work.accessible=function(user){
    for(var key in Work.access){
        Work.access[key] = key == user;
    }
    return Work.access;
};
Work.accessResult=function(){
    for(var key in Work.access){
        if (Work.access[key]==true) return key;
    }  
};
Work.access={
    admin:false, 
    performer:false, 
    client:false
};