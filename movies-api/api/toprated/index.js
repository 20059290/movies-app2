import express from 'express';
import toprated from '../../seedData/toprated.js';
import topRatedModel from './topratedModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(toprated);
});

export default router;