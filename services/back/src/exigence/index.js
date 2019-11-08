
export function getExigence(req, res) {
    req.mangodb.collection("exigence").insertOne(
        {
            type: 'EXIGENCE',
            name: 'Test',
            slug: 'test'
        },
        (err, dbRes) => {
            if (err) throw err;
            res.send(dbRes)
        });
}
