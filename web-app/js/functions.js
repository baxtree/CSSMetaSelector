function applyCSSTemplate() {
	var html = '<!DOCTYPE html><html lang="en"><head><style type="text/css">';
	html += $("#template_txt").val();
	html += "</style></head><body>";
	html += $("#testSnippet").val();
	html += "</body></html>";
	var ifrm = document.getElementById("preview");
	var doc;
	if(ifrm.contentWindow)
		doc = ifrm.contentWindow.document;
	else if(ifrm.contentDocument)
		doc = ifrm.contentDocument;
	doc.open();
//	alert(html);
	doc.write(html);
	doc.close();
}

function normaliseCSS(taid) {	
	var ta = document.getElementById(taid);
	var css = ta.value;
	css = (css.replace(/(\/\*[^(\/\*)]*?\*\/[\t\r\n\s]*?)?\[[^{]+\][\t\r\n\s]*?{[\t\r\n\s]*?}/g, ""));
	ta.value = css.replace("/^\t\t(\r)?\n/g", "");
}