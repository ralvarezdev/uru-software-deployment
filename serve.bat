@echo Activating virtual environment...
call ./.venv/Scripts/activate

@echo Serve MkDocs site...
mkdocs serve

pause