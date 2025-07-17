@echo Activating virtual environment...
call ./.venv/Scripts/activate

@echo Deploying MkDocs site...
mkdocs gh-deploy

@echo Deployment complete.
pause