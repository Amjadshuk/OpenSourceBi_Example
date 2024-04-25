import asyncio
import warnings
# Suppress the RuntimeWarning
warnings.filterwarnings("ignore", category=RuntimeWarning, message="Proactor event loop does not implement add_reader")
# Set event loop policy to WindowsSelectorEventLoopPolicy
#asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

from nbconvert.preprocessors import ExecutePreprocessor
import nbformat
import os
import time

def execute_notebook(notebook_path):
    # Load the notebook
    with open(notebook_path, 'r', encoding='utf-8') as f:
        notebook = nbformat.read(f, as_version=4)

    # Create an ExecutePreprocessor instance
    execute_preprocessor = ExecutePreprocessor(timeout=-1, kernel_name='python3')

    # Execute the notebook
    execute_preprocessor.preprocess(notebook, {'metadata': {'path': os.path.dirname(notebook_path)}})

    # Save the executed notebook
    with open(notebook_path, 'w', encoding='utf-8') as f:
        nbformat.write(notebook, f)

if __name__ == "__main__":
    #Daily CRON JON
    while True:
        notebook_path = 'readcountries.ipynb'  # Specify the path to your notebook
        execute_notebook(notebook_path)
        print("Excuted:readcountries.ipynb")
        time.sleep(86400)
    
