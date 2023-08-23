export const checkInnerTextIsNotNull = (container: HTMLElement, tagName: keyof HTMLElementTagNameMap) => {
	const headline =
		container.getElementsByTagName(tagName) && container.getElementsByTagName(tagName).length > 0
			? container.getElementsByTagName(tagName)[0]
			: null;
    let length = 0;
    if(headline && headline.textContent){
        length = headline.textContent.length;
    }
	return length;
};
