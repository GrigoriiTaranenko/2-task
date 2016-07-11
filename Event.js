function autorization() {
    var login = document.getElementById('Login').value;
    var control = JSON.parse(localStorage.getItem(login));
    if (control != null) {
        Table.memory.setCount();
        Table.memory.setName(login);
        switch (control.status) {
            case 'admin':
                body.delete();
                body=Table.admin(Table.memory.count);
                break;
            case 'client':
                body.delete();
                body=Table.client(Table.memory.setArray(control.array));
                break;
            case 'performer':
                body.delete();
                body=Table.performer(Table.memory.setArray(control.array));
                break;
            default:
                return alert('Нет такого');
        }
        body.init();
    } else alert('Нет такого');
}

function Exite() {
    head.home();
    body=new Work(router.spisok.authorization, 1);
}

function RegistrationPerfomen(){
    head.Registration();
    head.PushElementBack();
    body=new Registration(router.spisok.performer,1);
}


function RegistrationClient(){
    head.Registration();
    body.delete();
    body=new Registration(router.spisok.Client,1);
}

function back(){
    body=head.PopElementBack();
}

function SignUpClient(){
    Name=body.getName();
    body.addUser(Name,'client');
    head.home();
    body=new Work(router.spisok.authorization, 1);
}

function SignUpPerformer() {
    Name=body.getName();
    body.addUser(Name,'performer');
    body=head.PopElementBack();
}

function addtr(){
    head.Registration();
    head.PushElementBack();
    body=new Addticket(router.spisok.editor,1);
}

function addTicket(){
    body.addTablee();
    body=head.PopElementBack();
}

function AddComments(){
    head.PushElementBack();
    body=new Addticket(router.spisok.Comment,1);
}
function AddComment(){
    if (Work.accessResult()=='admin') body.OutputCommentAdmin();
    else body.OutputCommentUser();
    body=head.PopElementBack();
    head.PushElementBack();
    body=new Addticket(router.spisok.application,1);
    if (Work.accessResult()=='admin') body.OutputStringAdmin(Table.memory.Numer);
    else body.OutputStringUser(Table.memory.Numer);
}
function AssignPerfomen(){
    head.PushElementBack();
    body=new Addticket(router.spisok.DefineExecutor, 1);
    body.FillingPerformers();
}
function AssignTicket(){
    body.TicketPerformers();
    body=head.PopElementBack();
    head.PushElementBack();
    body=new Addticket(router.spisok.application,1);
    if (Work.accessResult()=='admin') body.OutputStringAdmin(Table.memory.Numer);
    else body.OutputStringUser(Table.memory.Numer);
}
