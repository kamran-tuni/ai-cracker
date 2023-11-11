# Chat OTK

This tool utilizes generative Artificial Intelligence in a sustainable manner to collect and summarize real time insights to help drive business decisions.

## Clone repo and move to backend dir

```bash
git clone https://github.com/kamran-tuni/ai-cracker.git
cd backend
```


## Environment Setup

*Prerequisites:* Python 3.9 & Pip

```bash
python -m venv env
```

On Linux/Mac, activate the environment with:

```bash
source env/bin/activate
```

On Windows, use:

```bash
.\env\Scripts\activate
```

With the virtual environment activated, install the required Python dependencies:

```bash
pip install -r requirements.txt
```

## Run API server

```bash
uvicorn app.main:app --reload
```
After launching the server, it will be accessible at http://127.0.0.1:8000/. Additionally, you can access the API documentation at http://127.0.0.1:8000/docs/ for a detailed overview of the API endpoints and their usage.

## Database migration

Create

```bash
alembic revision --autogenerate -m "migration_title"
```

Apply

```bash
alembic upgrade head
```

## Code formatting

Adhere to PEP 8 standards for Python code styling. Before committing your code, format it using Black

```bash
black .
```

## Code Documentation

For consistent and clear in-code documentation, use Google Style Docstrings.

## Static type checking

```bash
mypy .
```
