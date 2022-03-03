import express from 'express';

const router = express.Router();

// const { getAll } = require('../../controllers/userController');

router.get('/', (Req, res) => {
    res.json({
        message: 'container',
    });
});

export default router;
