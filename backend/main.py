from fastapi import FastAPI

app = FastAPI()
@app.get("/")
def home():
	return {"message": "Hello, World!"}
@app.post("/encrypt")
def encrypt():
	return {"message": "Encrypt"}
# @app.post("/decrypt")
# def decrypt():
# 	return {"message": "Decrypt"}
    