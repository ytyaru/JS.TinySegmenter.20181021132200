window.addEventListener('DOMContentLoaded', function() {
	var jpstr = document.getElementById("JapaneseString");
	jpstr.addEventListener("change", Run);
	jpstr.value = "私の名前は中野です。";
	Run();
});
function Run() {
	var segmenter = new TinySegmenter();                 // インスタンス生成
	var segs = segmenter.segment(document.forms.UserForm.JapaneseString.value);  // 単語の配列が返る
	var target = document.getElementById("Output");
	target.value = segs.join(" | ");
}
