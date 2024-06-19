import express from 'express';
import crypto from 'crypto';
import fs from 'fs';
import loadJson from '../utils/utils.js';
import { error } from 'console';

function generateError(comment) {
  const errorResponse = {
    "metric": "API response",
    "value": "Error",
    "comments": comment
  }
  return errorResponse;
}


const router = express.Router();


router.get('/:username', (req, res) => {
  const username = req.params.username || 'unknown';
  const filepath = `${process.env.DATA_PATH}/${username}.json`;

  try {
    const userHistory = loadJson(filepath);
    res.status(200).json(userHistory);
  } catch (error) {
    const errorResponse = generateError(`Unable to find data for username ${username}.`)
    res.status(400).send(errorResponse);
  }
})


router.post('/:username', (req, res) => {
  try {
    const username = req.params.username;
    const filepath = `${process.env.DATA_PATH}/${username}.json`;
    const userHistory = loadJson(filepath);
    const newActivityObject = {
      ...req.body,
      timestamp: Date.now(),
      id: crypto.randomUUID()
    }
    userHistory.push(newActivityObject);
    console.log(`New activity logged for username ${username}.`);
    fs.writeFileSync(filepath, JSON.stringify(userHistory, null, 2));
    res.status(200).json(newActivityObject);

  } catch (error) {
    const errorResponse = generateError(`Unable to find username ${username}.`)
    res.status(400).send(errorResponse);
  }
})

export default router;