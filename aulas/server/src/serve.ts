import express, { request, response } from 'express';

const app = express();

app.use(express.json());

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando

const users = [
    'Thiago',
    'Diego',
    'Cleiton',
    'Robson'
];

app.get('/users', (request, response) => {
    const search =  String(request.query.search);
    
    const filteredUsers = search ? users.filter(users => users.includes(search)) : users;
    
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    return response.json(users[id]);
});

app.post('/users', (request, response) => {

    const data = request.body;

    const user = {
        name : data.name,
        email : data.email
    };

    console.log(data);  

    return response.json(user);
});

app.listen(3333);

// npm run dev