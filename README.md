# ALGO bagrs backend
A backend created to host and manipulate a users portfolio and the crypto currencies they own

# MODELS
Coin: {title:String
       amount:String
       ppc(pricepercoin):Number
       gain: Number }
 
 Portfolio: {owner: String
             coins: [Coin]}
