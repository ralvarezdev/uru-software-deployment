#!/bin/bash

echo "Activating virtual environment..."
source ./.venv/bin/activate

echo "Serve MkDocs site..."
mkdocs serve