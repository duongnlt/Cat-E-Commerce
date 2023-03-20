from models.common import CommonModel
from typing import Optional, Union


class User(CommonModel):
    username: str
    password: str
    fullname: Union[str, None] = None
    email: str