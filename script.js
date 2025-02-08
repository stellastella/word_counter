function countWords(text) {
    if (typeof text !== 'string') {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            const wordCount = countWords(text);
            document.getElementById('wordCount').innerText = `The document contains ${wordCount} words.`;
        };
        reader.readAsText(file);
    }
});
 