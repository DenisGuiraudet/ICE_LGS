# ICE_LGS - Back Documentation

### Models

#### Category

Type:
```
String
```

#### Exigence

Object:
```
{
    _id: String,
    type: "EXIGENCE",
    name: String,
    category: String
}
```

#### Relation

Type:
```
String
```

Object:
```
{
    _id: String,
    type: "RELATION",
    name: String,
    exigence_1: Exigence,
    exigence_2: Exigence
}
```

#### Util

Edition:
```
[ // List of Exigence
    {
        _id: String, // existing or new
        name: String,
        category: String,
        relations: [
            {
                _id: String, // existing or new
                name: String,
                exigence_2_id: Exigence._id
            }
        ]
    }
]
```

### Routes

#### Category

| USE | TYPE | ROUTE | DATA TO SEND | RESULT |
| --- | --- | --- | --- | --- |
| `EDIT` | GET | /category/types | | Category Type List |

#### Exigence

| USE | TYPE | ROUTE | DATA TO SEND | RESULT |
| --- | --- | --- | --- | --- |
| | GET | /exigence/:id | | Exigence |
| | GET | /exigence/all | | Exigence List |
| | POST | /exigence/new | `name`, `url`, `category` | Exigence |

#### Relation

| USE | TYPE | ROUTE | DATA TO SEND | RESULT |
| --- | --- | --- | --- | --- |
| `EDIT` | GET | /relation/types | | Relation Type List |
| | GET | /relation/:id | | Relation |
| | GET | /relation/all | | Relation List |
| | POST | /relation/new | `name`, `exigence_1_id`, `exigence_2_id` | Relation |

#### Util

| USE | TYPE | ROUTE | DATA TO SEND | RESULT |
| --- | --- | --- | --- | --- |
| `VIEW` | GET | /util/exigences_with_category | | Exigence List, Category List |
| `VIEW` | GET | /util/exigences_from_category_name/:name | | Exigence List |
| `VIEW` | GET | /util/relations_from_exigence/:id | | Exigence List, Relation List, Exigence List |
| `VIEW` | GET | /util/relations_exigences_from_relation_name/:name | | Exigence List, Exigence List |
| `EDIT` | GET | /util/editon | | Util Edition |
| `EDIT` | POST | /util/editon | Util Edition | |
