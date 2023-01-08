const infoArea = document.getElementById('infoArea');
const outPutt = document.getElementById('outPutt');

window.onload = resetAll(); 
function resetAll() {
  infoArea.innerHTML = '<div class="question">Question</div>'
  outPutt.innerHTML = `
          <pre>
  [reset] - run on initial page load / refresh
    > clear 'infoArea'
    > clear 'outPutt'
    > serve 'default'
  [run] 
    > clear 'infoArea'
    > clear 'outPutt'
    > get id of function
    > use id to serve (input area content)
          </pre>
  `;
  console.log("Page Reset Ran");
}
