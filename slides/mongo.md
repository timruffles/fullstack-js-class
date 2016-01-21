## Mongo
{title:1}

- Document database
- Stores key-value objects
- Queried with key-value objects

## Documents

- Structure application around 'documents', organised into collections
- e.g YouTube video, a blog post
- Keep all related data attached to those documents

## Intuition

```javascript
var db = {};

db.questions = [
  {
    _id: "abffc2",
    text: "Why is JSON so insanely great?",
    answers: [
    ],
  },
];

db.users = [
  {
    _id: "22dfe",
    name: "amy",
  },
];
```

## Example document

```javascript
{
  title: "Why I like cheese",
  text: "Cheese is stale milk, ...",
  author: {
    name: "Tim",
    profileUrl: "...",
  },
  comments: [
    {
      text: "Cheese is HORRIBLE. WTF OMG LOL viagra...",
      authorName: "Bob",
    },
  ],
}
```

## Denormalisation

- Keeping all related data together
- But what is *normalisation*?

## Normalisation

- Splitting data out to de-duplicate it

## Diagram
{notitle: 1}

<img src="media/norm-and-de.png">

## Why?

## Advantage

- Makes updating easier
- For instance, if a blog author's name change, we have to update their name embedded in every post

## e.g
{notitle:1}

<img src="media/norm-vs.png">

## Why Mongo?

- Easy to setup and use
- Datastructures - nested keys and values, arrays etc
- Good at running at medium levels of distribution (multiple servers)
- Good for prototyping

## When choose something else?

- Important data: choose an ACID datastore (even Google does this), e.g Postgres
- Serious scale: Cassandra etc
- Complex search: ElasticSearch, Lucene
- Extreme speed: Redis

## Examples
{sub: 1}

## Saving

- `insert(document)`

```javascript
movies.insert({
  title: "funny cat",
  comments: [],
  author: {
    name: "Grace D. Hopper",
  },
});
```

## Retrieving

- Simplest - matching property by property between documents and 
- `find(query)`

```javascript
movies.find({
  title: "funny cat",
});
```

## Updating

- Find records to update
- `update(query, update)`

```javascript
movies.update({
  _id: someId
}, {
  $set: {
    title: "Funny Cat",
  },
});
```

## Important

## Updating objects

```javascript
// we try to update all movies with a 0 rating
movies.update({}, {
  rating: 0,
});

// what happens?
```

## Oh no!
{bad:1}

We've replaced every object in the DB with `{rating: 0}`

## Use `$set`

```javascript
// to add to arrays, use $push, etc
movies.update({}, {
  $set: {
    rating: 0,
  },
});
```

## Removing

- Find records to remove
- `remove(query)`

```javascript
movies.remove({ _id: someId });
```

## Let's play!
{title: 1}

- Run `mongo` to get CLI
- db.someCollectionName.someCommand()
- db.find({}).pretty()

## In our app

- Using monk - a small usability wrapper
- Async - with promises

## Exercise!

    exercises/mongo
