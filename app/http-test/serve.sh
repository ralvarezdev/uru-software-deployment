echo "Activating virtual environment..."
source .venv/bin/activate

echo "Starting HTTP server..."
uvicorn server:app --host 0.0.0.0 --port $HTTP_PORT