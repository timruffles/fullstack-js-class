## Mongo
{title:1}

- Document database
- Stores key-value objects
- Queried with key-value objects

## Documents

- Structure application around 'documents', organised into collections
- e.g YouTube video, a blog post
- Keep all related data attached to those documents

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

- Keeping all related data together makes retrieving it fast
- But what is *normalisation*?

## Normalisation

- Splitting data out to de-duplicate it
- Makes updating easier
- For instance, if a blog author's name change, we have to update their name embedded in every post

## Let's give it a go


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
movies.update({ _id: someId }, {
  title: "Funny Cat",
})
```

## Removing

- Find records to remove
- `remove(query)`

```javascript
movies.remove({ _id: someId });
```
