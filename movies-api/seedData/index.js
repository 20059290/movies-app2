import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import genres from './genres';
import genresModel from '../api/genres/genresModel';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import toprated from './toprated';
import topRatedModel from '../api/toprated/topratedModel';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all user documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre Data');
  try {
    await genresModel.deleteMany();
    await genresModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genres Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTopRated() {
  console.log('load topRated data');
  console.log(toprated.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(toprated);
    console.info(`${toprated.length} Top Rated Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load top movie Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadTopRated();
}