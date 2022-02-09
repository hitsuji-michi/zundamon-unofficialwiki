function footer() {
    var getUrl = window.location.href;
    var baseUrl = window.location.origin;

    var html = "";
    html += '<ul class="nonedot">';

    var value = baseUrl + "/zundamon-unofficialwiki/";;
    if (getUrl != value) {
        html += '<a href="../"><li>HOME</li></a>';
        html += '<a href="#main"><li>ページ上部</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/chronology/";
    if (getUrl != value) {
        html += '<a href="';
        html += value;
        html += '"><li>年表</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/character-reference/";
    if (getUrl != value) {
        html += '<a href="';
        html += value;
        html += '"><li>設定一覧</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/quote-inove/";
    if (getUrl != value) {
        html += '<a href="';
        html += value;
        html += '"><li>Web小説引用セリフ</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/voice-list/";
    if (getUrl != value) {
        html += '<a href="';
        html += value;
        html += '"><li>追加ボイスfile名一覧</li></a>';
    }

    var value = baseUrl + "/zundamon-unofficialwiki/link/";
    if (getUrl != value) {
        html += '<a href="';
        html += value;
        html += '"><li>外部リンク一覧</li></a>';
    }

    html += '</ul>';

    document.write(html);
}

function releasedate() {
    const current = new Date(document.lastModified);
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var date = current.getDate();
    var hours = current.getHours();
    var minute = current.getMinutes();

    if (month < 10) { month = "0" + month; }
    if (date < 10) { date = "0" + date; }
    if (hours < 10) { hours = "0" + hours; }
    if (minute < 10) { minute = "0" + minute; }

    var time = '<p class="date">';
    time += '更新日時：';
    time += year;
    time += '年';
    time += month;
    time += '月';
    time += date;
    time += ' ';
    time += hours;
    time += ':';
    time += minute;
    time += '</p>';

    document.write(time);
}