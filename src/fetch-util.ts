export const postData = (url: string, data: any) =>
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  }).then(response => response.json());

export const getData = (url: string) =>
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrer: 'no-referrer'
  }).then((response: Response) => response.json());
