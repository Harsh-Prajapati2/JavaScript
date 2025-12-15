const users = ["a", "b"];

const obj = users.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
}, {});

console.log(obj); // Output: { a: true, b: true }
console.log(users);

const fre = ["a","b","a"].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(fre);

let ans = [[1,2],[3,4]].reduce((acc, cur) => 
    {
        acc.concat(cur)
        console.log(acc)
    }, []);
console.log(ans)