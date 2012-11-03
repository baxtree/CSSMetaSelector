function generateSkeleton() {
	document.getElementById("getStyleTemplate").style.display = "none";
	document.getElementById("loadingbar").style.display = "block";
	document.forms["generateTemplate"].submit();
}

function applyCSSTemplate() {
	cssta.save();
	htmlta.save();
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

function shareTemplate() {
	cssta.save();
	htmlta.save();
	document.forms["shareTempalte"].submit();
}

function normaliseCSS() {	
	var css = cssta.getValue();
	css = (css.replace(/(\/\*[^(\/\*)]*?\*\/[\t\r\n\s]*?)?\[[^{]+\][\t\r\n\s]*?{[\t\r\n\s]*?}/g, ""));
	css = css.replace("/^\t\t(\r)?\n/g", "");
	cssta.setValue(css);
	cssta.save();
}

function saveCSS(cme) {
	cme.save();
	document.getElementById("copy").disabled = false;
	document.getElementById("trim").disabled = false;
	document.getElementById("share").disabled = false;
}

function saveHTML(cme) {
	cme.save();
	document.getElementById("apply").diabled = false;
}