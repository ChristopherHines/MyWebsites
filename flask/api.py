from flask import Flask 
app = Flask(__name__)

@app.route('/hinesBills')
def getHinesBills():
    billData = {'mortgage': 0, 
                'electric': 0,
                'water': 0,
                'gas': 0,
                'internet': 0,
                'mtime': '10/08/2020'}
    return billData

if __name__ == '__main__':
    app.run(port=2000, host='0.0.0.0')