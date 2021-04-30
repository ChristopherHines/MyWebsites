import sqlite3

conn = sqlite3.connect('bills.db')

cursor = conn.cursor()

# cursor.execute('''CREATE TABLE bills (
#                     mortgage NUMERIC, 
#                     electric NUMERIC,
#                     water NUMERIC,
#                     gas NUMERIC,
#                     internet NUMERIC,
#                     mtime DATE
#                   )''')

cursor.execute('''INSERT INTO bills VALUES(
                    1400,
                    100,
                    179.16,
                    26,
                    70,
                    DATE(now)
                 )''')