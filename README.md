# Assignment 2 - Web API.
​
Name: Stephen Carbery
​
## Features.
​
 
 + Feature 1 - Users can add movies to a watchlist for later viewing 
 + Feature 2 - Users can delete movies from their watchlist and favourites
 + Feature 3 = Users can show the top rated movies
​
## Installation Requirements

​
```bat
git clone https://github.com/20059290/movies-app2
```
​
Ensure Mongodb is also installed: https://www.mongodb.com/download-center/community
​
```bat
cd ./movies-api/
npm install
cd ../reactApp/
npm install
cd ..movies-api/
mongod -dbpath db
```
​
## API Configuration
.env sample file to be placed in the 'movies-api' directory
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
SEED_DB=true
SECRET=ilikecake
TMDB_KEY=[YOUR-TMDB-API-KEY]
```
​
​
## API Design
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/genres/ | Get a list of movie genres | N/A | N/A | N/A  
| /api/users/{userid}/watchlist | Get all movies in a users watchlist | Add a new movies to a users watchlist | N/A | Delete a movie from the users watchlist
| /api/users/{userid}/favourites | Get all movies in a users favourites list | Add a new movies to a users favourites list | N/A | Delete a movie from the users favourites list
| /api/users?action=register | Get all users | Create a new user account | N/A | N/A  
| ... | ... | ... | ... | ...

​
​
## Security and Authentication
Hashed credentials are stored in mongoDB, not in plaintext.
Toprated page can only be accessed by users that are logged in
​
## Integrating with React App
​
~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
~~~
​
## Extra features
​
Top rated movies can be seen and is pulled from seeded data.
Movies can be added to a users favourites and watchlist and can also be deleted from each list.
​
## Independent learning
​
N/A