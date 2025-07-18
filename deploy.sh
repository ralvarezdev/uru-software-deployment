#!/bin/bash

echo "Activating virtual environment..."
source ./.venv/bin/activate

echo "Deploying MkDocs site..."
mkdocs gh-deploy

echo "Deployment complete."