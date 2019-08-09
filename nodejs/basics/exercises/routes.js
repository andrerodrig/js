const fs = require('fs');

const RouteIt = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>')
        res.write('<body>');
        res.write('<h1 style="background-color: red;">Hello from NodeJS Server</h1>');
        res.write('<div style="display: block;background: rgb(2,0,36);background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,99,1) 100%, rgba(0,212,255,1) 100%);">');
        res.write('<form action="/create-user" method="POST">');
        res.write('<label style="color: white;padding-left: 5px;padding-right: 7px;" for="user">Username</label><input type="text" style="margin-top: 10px;"id="user" placeholder="Enter your username" name="create-user"></input>');
        res.write('<button type="submit">Enter</button>')
        res.write('</form>');
        res.write('</div>');
        res.write('<a href="/create-user">User Page</a>');
        res.write('<a href="/users">Users</a>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method ==='POST'){
        const body = [];
        req.on('data',(frame) => {
            console.log(frame);
            body.push(frame);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
            fs.writeFile('users.txt',message,(err) => {
                res.statusFile = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    }

    if(url === '/create-user' && method ==='GET'){
        fs.readFile('users.txt', (err, data) => {
            if (err) throw err;

            console.log(data.toString());
            res.write('<html>');
            res.write('<head><title>User Page</title></head>')
            res.write(`<body><h1 style="background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,99,1) 100%, rgba(0,212,255,1) 100%);">Wellcome ${data}</h1></body>`);
            res.write('</html>');
            return res.end();
        });
        
        
    }

    if(url === '/users' && method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>')
        res.write('<body>');
        res.write('<h1 style="background-color: purple;">List of Users</h1>');
        res.write('<h2 style="background-color: gray;"><ul><li>Satanas</li><li>Lord of Destructions</li><li>Orobas</li></ul></h2>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports = RouteIt;