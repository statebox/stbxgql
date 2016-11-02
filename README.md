start server

	./node_modules/babel-cli/bin/babel-node.js  --presets es2015 ./server.js

go to `localhost:57473/graphiql` then enter

```
{
	posts {
		id
	}
}
```
