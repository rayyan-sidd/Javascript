const table = document.getElementById('table')

window.addEventListener('keydown', function(e){
    table.innerHTML = ` 
    <div id="table"> 
    <div> Press a key to Check </div>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})