FROM python3

# Adding source files into container
ADD . /src

# Install dependencies
RUN pip3 install flask

# Define working directory
WORKDIR /src

# Expose port 2000
EXPOSE 2000

# Run flask api
CMD ["python3", "api.py"]
