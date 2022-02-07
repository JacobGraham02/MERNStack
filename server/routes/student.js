import express from 'express';

const router = express.Router();

router.get('/', function(request, response) {
    response.send(`Router is working`);
});

export default router;