#!/usr/bin/python3
''' Script lists all cities from the database hbtn_0e_4_usa. '''
import MySQLdb
import sys

def list_cities(username, password, db_name):
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=db_name)
    cursor = db.cursor()

    query = "SELECT * FROM cities ORDER BY id ASC"
    cursor.execute(query)

    rows = cursor.fetchall()

    for row in rows:
        print(row)

    cursor.close()
    db.close()

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: {} <username> <password> <database>".format(sys.argv[0]))
        sys.exit(1)

    username, password, db_name = sys.argv[1], sys.argv[2], sys.argv[3]

    list_cities(username, password, db_name)
