// console.log("Project 5")
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  //   console.log(e.key, e.keyCode);
  insert.innerHTML = `
<table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Digit/Key</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>  
</table> 
`;
});
