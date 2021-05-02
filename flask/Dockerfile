FROM python:3.7-slim

# Adding source files into container
ADD . /src

# Define working directory
WORKDIR /src

# Install dependencies
RUN pip3 install -r requirements.txt

# Expose port 2000
EXPOSE 2000

# Run flask api
CMD ["python3", "api.py"]