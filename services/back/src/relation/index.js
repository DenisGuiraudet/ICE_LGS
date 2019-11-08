
export function getRelation(req, res) {
    res.send({
        id: req.params.id,
        type: 'RELATION',
        name: 'Test',
        slug: 'test'
    })
}
