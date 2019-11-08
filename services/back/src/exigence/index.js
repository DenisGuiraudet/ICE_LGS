
export function getExigence(req, res) {
    res.send({
        id: req.params.id,
        type: 'EXIGENCE',
        name: 'Test',
        slug: 'test'
    })
}
