# slow-down-fashion

### Database Prep

- Access the MySQL interface in your terminal by running 'mysql -u root -p'
- Create a new database called slowDownFashion: 'create database slowDownFashion;'
- Add a '.env' file to the project directory containing MySQL authentication, access token for jwt
- to generate secret key:
  - open terminal, type node, then type:
  - require('crypto').randomBytes(64).toString('hex')

```bash
  DB_HOST=127.0.0.1
  DB_USER=root
  DB_NAME=slowDownFashion
  DB_PASS=YOURPASSWORD
  ACCESS_TOKEN_SECRET= [generated secret key - see above]
```

- In a new terminal: in the project directory run 'npm run migrate' to create tables within the slowDownFashion database
  The tables are as follows:

-users
-wardrobe
-sustainableClothing
(see ReadmeResources: Tables.PNG for details)

- In a new terminal, install the following packages in the backend:

### Development

- BACKEND TERMINAL: in project directory run 'npm start' (runs on port 5005)
- FRONTEND TERMINAL: 'cd client' then 'npm start' (runs on port 3000)
