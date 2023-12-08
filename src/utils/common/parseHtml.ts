import { JSDOM } from 'jsdom';
import hljs from 'highlight.js';

export const addCopyIconToPreTags = (doc:JSDOM, preTag: HTMLPreElement) => {
  const copyIcon = doc.window.document.createElement('button');
  copyIcon.className = 'btn-copy';
  copyIcon.title = 'Copy Code';
  preTag.prepend(copyIcon);
}

export const generateImageTags = (doc:JSDOM, textOnly: boolean) => {
  const imgTags = doc.window.document.querySelectorAll('img');
  const anchorTags = doc.window.document.querySelectorAll('a');
  imgTags.forEach(tag => {
    const src = tag.getAttribute('src');
    if(!(src?.includes('https')) && process.env.NEXT_PUBLIC_IMAGES_URL){
      tag.setAttribute('src', process.env.NEXT_PUBLIC_IMAGES_URL + src);
      tag.style.width = '100%';
      tag.style.height = '100%';
    }
  });
  anchorTags.forEach(anchor => anchor.setAttribute('target', '_blank'));
  const codeTags = doc.window.document.querySelectorAll('code');
  codeTags.forEach(tag => {
    tag.innerHTML = hljs.highlightAuto(tag.textContent as string, ['java','typescript' ,'javascript', 'python', 'c#', 'php', 'kotlin', 'swift']).value;
    const preTag = tag.parentElement as HTMLPreElement;
    if(preTag){
      addCopyIconToPreTags(doc, preTag);
    }
  })

  if(doc.window.document.documentElement.textContent && textOnly){
    return doc.window.document.documentElement.textContent;
  }
  else if(doc.window.document.documentElement.textContent && !textOnly){
    return doc.window.document.documentElement.innerHTML;
  }
  return '';
}