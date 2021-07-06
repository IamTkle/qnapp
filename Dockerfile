FROM python:3.9

WORKDIR /app

COPY requirements.txt . 

RUN pip install -r requirements.txt

COPY . .

ENV PORT $PORT

# ENTRYPOINT ["flask"]

CMD ["sh", "-c", "flask run --host 0.0.0.0 --port $PORT"] 

# CMD ["run", "--host", "0.0.0.0", "--port", "$PORT"]
