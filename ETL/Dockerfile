# Use the official Python slim image as a base
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip3 install sqlalchemy

# Copy the rest of the application code into the container at /app
COPY . .

# Command to run the application
CMD ["python3", "main.py"]
