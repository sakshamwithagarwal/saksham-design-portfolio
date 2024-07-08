import requests

authorization = requests.post(
    "https://accounts.spotify.com/api/token",
    auth=("380b8204cf024f52a834451c861a3891", "28686574140e41aabbbb2e947a8211f8"),
    data={
        "grant_type": "authorization_code",
        "code": "AQCxW_5gAuD8Whn2rnm3ubLyHo8zHX5RLzhN3v6p8pKC0oFc3LQlHKEuQKsdmvFyWhz2w24mL1qfCPTzFIrNks7muX6OYAPUXXWbh7EDZCKARkYqvy0Bwd42-y-pg9bm6ZU_q4eLHJTr12opfGQFkzoNNQzQUW_kq6jrB-oA2h-Sew5gkcwpJqp0phkZb_8r5_ZoZMUVEUbecqFjylOp1wOb98_8bze0hywjPld1pv51IqXIu5Hd3mA9HdZ2KOCU1T5o-Yyxfw",
        "redirect_uri": "https://sakshamparag.com"
    },        
)

authorization_JSON = authorization.json()
print(authorization_JSON["access_token"]) 
