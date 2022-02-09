function footer() {
    var getUrl = window.location.href;
    var baseUrl = window.location.origin;

    var html = "";
    html += '<ul class="nonedot">';

    var value = baseUrl + "/zundamon-unofficialwiki/";
    if (getUrl != value) {
        html += '<a href="../"><li>HOME</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/chronology/";
    if (getUrl != value) {
        html += '<a href="';
        html += baseUrl;
        html += '/chronology/"><li>年表</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/character-reference/";
    if (getUrl != value) {
        html += '<a href="';
        html += baseUrl;
        html += '/character-reference/"><li>設定一覧</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/quote-inove/";
    if (getUrl != value) {
        html += '<a href="';
        html += baseUrl;
        html += './quote-inove/"><li>Web小説引用セリフ</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/voice-list/";
    if (getUrl != value) {
        html += '<a href="';
        html += baseUrl;
        html += '/voice-list/"><li>追加ボイスfile名一覧</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/voice-list/";
    if (getUrl != value) {
        html += '<a href="';
        html += baseUrl;
        html += '/link/"><li>外部リンク一覧</li></a>';
    }

    html += '</ul>';

    document.write(html);
}