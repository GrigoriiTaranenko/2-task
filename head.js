

Head.prototype=Object.create(Work.prototype);
Head.prototype.constructor=Head;
/**
 *
 * @param application
 * @param numer
 * @constructor
 * @this.qualifier определяет какие кнопки нужно включить при регистрации
 * @this.Home() - делает меню как на первоначальной страницы
 */

function Head(application, numer){
    Work.apply(this,arguments);
    var PreviousBlock = [];
    this.qualifier = function(ObjectAccess){
        var Access='';
        for (var key in ObjectAccess)
            if (ObjectAccess[key]){
                Access=key;
                break;
            }
        switch (Access){
            case 'admin':
                RP.classList.remove('hidden');
                RC.classList.add('hidden');
                Exit.classList.remove('hidden');
                break;
            case 'client':
                RP.classList.add('hidden');
                RC.classList.add('hidden');
                Exit.classList.remove('hidden');
                break;
            case 'performer':
                RP.classList.add('hidden');
                RC.classList.add('hidden');
                Exit.classList.remove('hidden');
                break;
            default:
                RP.classList.add('hidden');
                RC.classList.remove('hidden');
                Exit.classList.add('hidden');
        }
    };
    this.addBack = function(){
        Back.classList.remove('hidden');
    };
    this.deleteBack=function(){
        Back.classList.add('hidden');
    };
    this.home = function(){
        body.delete();
        PreviousBlock=[];
        this.qualifier(Work.accessible());
        this.deleteBack();
    };
    this.Registration=function(){
        RP.classList.add('hidden');
        RC.classList.add('hidden');
        Exit.classList.remove('hidden');
    };
    this.PushElementBack=function(){
        this.addBack();
        PreviousBlock.push(body.ApplicationClassnName);
        body.delete();
    };
    this.PopElementBack=function(){
        var Name=PreviousBlock.pop();
        PreviousBlock=[];
        if (PreviousBlock=[]) this.deleteBack();
        switch(Name){
            case 'TableApplications':
                body=Table.run();
                break;
            default:
                body=Table.run();
        }
        return body;
    }
}