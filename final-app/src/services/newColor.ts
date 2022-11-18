import { rgbObject } from '../components/ColorGenerator/interface';

export async function setNewColor(obj: rgbObject) {
  const rawResponse = await fetch('/api/postNewColor', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const content = await rawResponse.json();

  return content;
}
