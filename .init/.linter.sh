#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-pitch-deck-platform-6280-6289/kavia_pitchdeck_frontend
npm run lint
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

