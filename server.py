

#워들 사이트를 서버에 띄우기
## 경로랑 서버이름이 일치해야함  

from fastapi import FastAPI
from pydantic import BaseModel

#static 파일 우리가 만든 정적 파일을 서버에 올리는것 
from fastapi.staticfiles import StaticFiles


app = FastAPI()

answer = 'SUNNY'

@app.get('/answer')
def get_answer():
  return answer

app.mount("/", StaticFiles(directory="static", html= True), name="static")
