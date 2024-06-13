from fastapi import FastAPI

from endpoints import endpoints
from scripts.data_intialization import initialize_data

app = FastAPI()
app.include_router(endpoints.router)

initialize_data()
