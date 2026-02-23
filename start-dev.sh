#!/bin/bash
cd "$(dirname "$0")"
echo "Installing dependencies (if needed)..."
npm install
echo ""
echo "Building and starting Pita Bowl (production mode)..."
echo "When you see 'Ready' below, open:  http://localhost:3000"
echo "Keep this window open while using the site."
echo ""
npm run build && next start
