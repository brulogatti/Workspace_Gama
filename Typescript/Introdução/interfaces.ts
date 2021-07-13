interface Usuario{
    nome: string;
    email:string;
    address?: string;
}

function getuser(): Usuario{
    return{
        nome:'Bruna',
        email: 'bru@email.com'
    }
}

function setuser(usuario: Usuario){
    //Fazer alguma coisa
}