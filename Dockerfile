FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["flask"]

CMD ["run", "host", "0.0.0.0:5000"]