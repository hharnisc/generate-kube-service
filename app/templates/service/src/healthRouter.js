import express from 'express';
const router = new express.Router();

router.get('/health', (req, res) => res.status(204).send());

export default router;
