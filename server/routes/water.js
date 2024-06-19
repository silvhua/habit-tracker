import express from 'express';
import crypto from 'crypto';
import fs from 'fs';
import loadJson from '../utils/utils.js';


const router = express.Router();

router.get('/:username', (req, res) => {
  const username = req.params.username;
  const filepath = `${process.env.DATA_PATH}/${username}.json`;
  const userHistory = loadJson(filepath);

  res.status(200).json(userHistory);
})

export default router;