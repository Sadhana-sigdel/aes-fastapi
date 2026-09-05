from fastapi import FastAPI
from pydantic import BaseModel
class EncryptRequest(BaseModel):
	plaintext: str
	key: str
app = FastAPI()
@app.get("/")
def home():
	return {"message": "Hello, World!"}
@app.post("/encrypt")
def encrypt(request: EncryptRequest):
	print(request.plaintext)
	print(request.key)
	return {"message": "Encrypt"}
# @app.post("/decrypt")
# def decrypt():
# 	return {"message": "Decrypt"}
    