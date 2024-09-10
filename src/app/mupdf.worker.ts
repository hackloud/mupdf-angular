/// <reference lib="webworker" />
import * as mupdf from 'mupdf';
console.log(mupdf);

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
