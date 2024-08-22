const express = require('express');

const router = express.Router();

router.get('/ping', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('OK');
});

export default router;