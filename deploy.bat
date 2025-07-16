@echo Activating virtual environment...
call ./.venv/Scripts/activate

@echo Deploying MkDocs site to origin and dev remotes...
mkdocs gh-deploy --remote-name origin
mkdocs gh-deploy --remote-name dev

@echo Deployment complete.
pause