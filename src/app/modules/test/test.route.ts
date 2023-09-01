import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('server running');
});

export const testRoutes = router;
