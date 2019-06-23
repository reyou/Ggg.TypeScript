### Algorithmia Interview Solution

This solution was built via Typescript/Javascript.

Please run following commands in order to execute test called "Sum of Graph Rewards/getTotalRewards".
Test methods can be found under `./test/index.tests.ts` file.

```
$ npm i
$ npm run test
```

### Description

There are two main methods were implemented under RewardsManager class to get results.

1. buildPageGraph
1. getTotalRewards

### buildPageGraph

This method takes a root node as a starting point, and traverses all children nodes by using DFS (Depth First Search) algorithm. This method builds all children nodes under given root node.

### getTotalRewards

Similar to buildPageGraph method, this method takes a root node as a starting point, and traverses all children nodes by using DFS (Depth First Search) algorithm. While visiting all nodes, it calculates total rewards and returns that value as a result.
