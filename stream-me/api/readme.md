# Test GraphQL playground


# SignUp
mutation SignUp($email:String!, $password:String!) {
    register(input:{email:$email,password:$password}) {
        user {
            _id
            email
        }
        token
    }
}

# QUERY VARIABLES
{ "email":"sergingg@gmail.com", "password":"P@ssw0rd!" }


# Return
{
  "data": {
    "register": {
      "user": {
        "_id": "60225d8552c5f89ca0c263b4",
        "email": "sergingg@gmail.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"
    }
  }
}

# AddStream
mutation AddStream($input:StreamInput!) {
    addStream(input:$input) {
        _id
        title
        description
        url
    }
}

# QUERY VARIABLES
{"input":{"title":"Hello stream!","description":"Welcome to my stream","url":"youtube.com"}}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
{
  "data": {
    "addStream": {
      "_id": "6022606a52c5f89ca0c263b5",
      "title": "Hello stream!",
      "description": "Welcome to my stream",
      "url": "youtube.com"
    }
  }
}

# EditStream
mutation EditStream($input:StreamInput!) {
    editStream(input:$input) {
        _id
        title
        description
        url
    }
}

# QUERY VARIABLES
{"input":{"id":"6022606a52c5f89ca0c263b5","title":"Hello stream!","description":"hello","url":"youtube.com"}}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
{
  "data": {
    "editStream": {
      "_id": "6022606a52c5f89ca0c263b5",
      "title": "Hello stream!",
      "description": "hello",
      "url": "youtube.com"
    }
  }
}

# DeleteStream
mutation DeleteStream($id:ObjectId!) {
    deleteStream(streamId:$id)
}

# QUERY VARIABLES
{"id":"6022606a52c5f89ca0c263b5"}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
{
  "data": {
    "deleteStream": true
  }
}


# CurrentUser
query CurrentUser {
    currentUser{
        _id
        email
    }
}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
{
  "data": {
    "currentUser": {
      "_id": "60225d8552c5f89ca0c263b4",
      "email": "sergingg@gmail.com"
    }
  }
}

# Streams
query Streams {
    streams {
        _id
        title
        description
        url
    }
}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
** empty **
{
  "data": {
    "streams": []
  }
}
** with 1 record **
{
  "data": {
    "streams": [
      {
        "_id": "6022665652c5f89ca0c263b6",
        "title": "Hello stream!",
        "description": "Welcome to my stream",
        "url": "youtube.com"
      }
    ]
  }
}

# Stream
query Stream($streamId:ObjectId!) {
    stream(streamId:$streamId) {
        _id
        title
        description
        url
        author {
            _id
            email
        }
    }
}

# QUERY VARIABLES
{"streamId":"6022665652c5f89ca0c263b6"}

# HTTP HEADERS
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjI1ZDg1NTJjNWY4OWNhMGMyNjNiNCIsImlhdCI6MTYxMjg2NDkwMX0.uKBqyEiMQ2RNvfrJzIVDJwkGAPcWHk-sr3YUJpAMIqc"}

# RETURN
{
  "data": {
    "stream": {
      "_id": "6022665652c5f89ca0c263b6",
      "title": "Hello stream!",
      "description": "Welcome to my stream",
      "url": "youtube.com",
      "author": {
        "_id": "60225d8552c5f89ca0c263b4",
        "email": "sergingg@gmail.com"
      }
    }
  }
}

