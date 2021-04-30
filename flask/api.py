from flask import Flask 
import sqlite3
app = Flask(__name__)

@app.route('/billData')
def getHinesBills():
    conn = sqlite3.connect('bills.db')

    cursor = conn.cursor()

    rows = cursor.execute('''SELECT * FROM bills''')

    billData = {}
    for row in rows:
        billData['mortgage'] = row[0]
        billData['electric'] = row[1]
        billData['water'] = row[2]
        billData['gas'] = row[3]
        billData['internet'] = row[4]
        billData['mtime'] = row[5]

    return billData

if __name__ == '__main__':
    app.run(port=2000, host='0.0.0.0')