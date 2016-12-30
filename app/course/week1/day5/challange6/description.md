#### Sort paths

Write a function called ```sortPath``` that turns a list of paths into a nested list of paths. all elements withing the same folder will be wrapped in an array who's first element is the folder and the second element must be a list (unless the folder is empty) constaining all the subelements. Each folder must be wrapped withing it own array even if its empty. Only the topmost array will be a simple array refering to no top directory.

Example

```jsx
var pathList = ["week1/day1/hour2", "week1/day1/hour1", "week2/day1",  "week2/day2/hour1", "week2/day2/hour2"]
sortPath(pathList)
// [
//     [week1,
//         [
//             [day1,
//                 [
//                     [hour1],
//                     [hour2]
//                 ]
//             ]
//         ]
//     ],
//     [week2,
//         [
//             [day1],
//             [day2,
//                 [
//                     [hour1],
//                     [hour2]
//                 ]
//             ]
//         ]
//     ]
// ]

```