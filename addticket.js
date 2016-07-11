/**
 * Created by Sergey on 09.07.2016.
 */

Addticket.prototype=Object.create(Work.prototype);
Addticket.prototype.constructor = Addticket;
function Addticket(application,numer) {
    Work.apply(this,arguments);
    self=this.getSelf();
    var DB=JSON.parse(localStorage.getItem('!table!'));
    var User={"status":Work.accessResult(),"array":Table.memory.array};
 //   var table = {"Name": DB.Name, "application": DB.application, "Comment": DB.Comment, "count": DB.count};
    var Performens=JSON.parse(localStorage.getItem('!Performer!'));
    var Numer=Table.memory.Numer;
//    var Comment=self.querySelector('textarea').value;
    this.addTablee=function () {
        var Application=self.querySelectorAll('.moi')[1].value;
        var Name=self.querySelector('.moi').value;
        if (Name!='' && Application!=''){
            DB.count+=1;
            DB.Name.push(Name);
            DB.application.push(Application);
            DB.Comment.push([]);
            localStorage.setItem('!table!', JSON.stringify(DB));
            Table.memory.count+=1;
            if (User.status!='admin'){
//                Table.memory.array.push(DB.count-1);
                User.array.push(DB.count-1);
                localStorage.setItem(Table.memory.Name, JSON.stringify(User));
            }
        } else alert('не хватает данных');
    };
    this.OutputStringAdmin=function(Numer){
        RR.classList.remove('hidden');
        self.querySelector('li').innerHTML+=DB.Name[Numer];
        self.querySelectorAll('li')[1].innerHTML+=DB.application[Numer];
        var array=DB.Comment[Numer];
        var count = array.length;
        for (var i=0;i<count;i++){
            self.querySelector('ul').lastElementChild.innerHTML+='<br>'+array[i];
        }
    };
    this.OutputStringUser=function(Numer){
        var array=User.array;
        self.querySelector('li').innerHTML+=DB.Name[array[Numer]];
        self.querySelectorAll('li')[1].innerHTML+=DB.application[array[Numer]];
        var ArrayComment=DB.Comment[array[Numer]];
        while (ArrayComment.length!=0){
            self.querySelector('ul').lastElementChild.innerHTML+='<br>'+ArrayComment.pop();
        }
    };
    this.OutputCommentAdmin=function(){
        var textarea=self.querySelector('textarea').value;
        if (textarea.length>0){
            var text=Table.memory.Name+': '+textarea;
            DB.Comment[Numer].push(text);
            localStorage.setItem('!table!',JSON.stringify(DB));
        }
    };


    this.OutputCommentUser=function(){
        var textarea=self.querySelector('textarea').value;
        if (textarea.length>0){
            var text=Table.memory.Name+': '+textarea;
            DB.Comment[User.array[Numer]].push(text);
            localStorage.setItem('!table!',JSON.stringify(DB));
        }
    };
    this.FillingPerformers=function(){
        var Text=self.querySelector('.ClientList');
        for (var i=0;i<DB.count;i++){
            option=document.createElement('option');
            option.innerHTML=DB.Name[i];
            option.value=i;
            Text.appendChild(option);
        }
        Text=self.querySelector('.performer');
        var count=Performens.Name.length;
        for (i=0;i<count;i++){
            option=document.createElement('option');
            option.innerHTML=Performens.Name[i];
            option.value=Performens.Name[i];
            Text.appendChild(option);
        }
    };
    this.TicketPerformers=function(){
        var ticket=self.querySelector('.ClientList').value;
        var performer=self.querySelector('.Performer').value;
        var Name=JSON.parse(localStorage.getItem(performer));
        var array=Name.array;
        if (array.indexOf(ticket)==-1) {
            Name.array.push(ticket);
            localStorage.setItem(performer, JSON.stringify(Name));
        }
        else alert('” него есть така€ задача');
    }
}