#!/bin/bash

echo "Activating virtual environment..."
source ./.venv/bin/activate

echo "Deploying MkDocs site to origin and dev remotes..."
mkdocs gh-deploy --remote-name origin
mkdocs gh-deploy --remote-name dev

echo "Deployment complete."