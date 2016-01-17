## Back v front-end
{sub:1}

## Client v server

- Backend: everything on our computers
- Frontend: everything on the user's computer

## Trust

- Backend: trusted environment
- Frontend: untrusted. Users can see *everything*
- What must backend be wary of?

## Fear gifts from the frontend

- *Never* trust user input
- Validate, restrict, rate-limit, monitor

## Persistence

- Users want same data on mobile, laptop, etc
- Therefore we must persist data somewhere all can access
- Backend required for persistence

## Store, retrieve

- Large amounts of backend work is saving and retrieving data
- Easy with a little; hard with lots
- Easy with few users and simple apps; hard with many, complex, real-time apps

## Databases

- Can shoulder a lot of the challenge of persistence for you
- Larger sites sometimes use simpler databases that do less, but support larger write-loads

## What are databases?

- Usually separate programs, running away from application server
- Usually save data to disk to persist it - in memory database are appearing to increase speed
- A range are avaiable - choosing one that fits your app is important


