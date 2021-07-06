from flaskapp import db

meta = db.metadata

for table in reversed(meta.sorted_tables):
    db.session.execute(table.delete())
    print(f"Queued deletion of {table}")

db.session.commit()
print("done")