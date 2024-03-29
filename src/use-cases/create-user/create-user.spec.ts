import { it, expect } from "vitest";

it('should create a user', async () => {
    await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Fool',
            email: 'fool@gmail.com',
            password: '54321'
        })
    }).then(d => d.json()).then(d => expect(d.message).toEqual('User created with sucess')).catch(e => console.log(e));
});

it('should be throwed an error', async () => {
    await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Kauã Santiago',
            email: 'santiago.kauajose12@gmail.com',
            password: '12345'
        })
    })
    await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Kauã Santiago(impostor)',
            email: 'santiago.kauajose12@gmail.com',
            password: '123456'
        })
    }).then(r => r.json()).then(d => expect(d.message).toEqual("User already exists.")).catch(e => console.log(e))
});