from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def hello():
    return """
    <!DOCTYPE html>
    <html>
    <head><title>Hello</title></head>
    <body><h1>Hello, world!</h1></body>
    </html>
    """