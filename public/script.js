async function getData() {
  const targetList = document.querySelector('.target');
  const request = await fetch('/api/dining');
  const json = await request.json();
  console.log(json);
  json.data.forEach((item) => {
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `<th>${item.hall_id}</th><td>${item.hall_name}</td><td>${item.hall_address}</td>`;
    targetList.append(appendItem);
  });
}

async function windowActions() {
  console.log('window loaded');
  getData();
}

window.onload = windowActions;