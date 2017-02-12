$(document).ready(function () {
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fmottestingfeeds',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var insert = '';
            console.log(result['items'][0]['title']);
            $.each(result['items'], function (index, item) {
               // console.log(item[0]['title']);
                insert += '<tr><td>' + result['items'][index]['title'] + '</td><td>' + result['items'][index]['description'].substring(0,100)+'...' + '</td><td class="">' + result['items'][index]['link']  + '</td><td></tr>';
            });
            $('#blogTable tr:last').after(insert);
        }
    });
});


$(document).ready(function () {
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var insert = '';
            console.log(result['items'][0]['title']);
            $.each(result['items'], function (index, item) {
               // console.log(item[0]['title']);
                insert += '<tr><td>' + result['items'][index]['title'] + '</td><td>' + result['items'][index]['description'].substring(0,100)+'...' + '</td><td class="">' + result['items'][index]['link']  + '</td><td></tr>';
            });
            $('#blogTable2 tr:last').after(insert);
        }
    });
});




$(document).ready(function () {
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FSoftwaretestinghelp',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var insert = '';
            console.log(result['items'][0]['title']);
            $.each(result['items'], function (index, item) {
                // console.log(item[0]['title']);
                insert += '<tr><td>' + result['items'][index]['title'] + '</td><td>' + result['items'][index]['description'].substring(0,100)+'...' + '</td><td class="">' + result['items'][index]['link']  + '</td><td></tr>';
            });
            $('#blogTable3 tr:last').after(insert);
        }
    });
});



$(document).ready(function () {
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-story',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var insert = '';
            console.log(result['items'][0]['title']);
            $.each(result['items'], function (index, item) {
                // console.log(item[0]['title']);
                insert += '<tr><td>' + result['items'][index]['title'] + '</td><td>' + result['items'][index]['description'].substring(0,100)+'...' + '</td><td class="">' + result['items'][index]['link']  + '</td><td></tr>';
            });
            $('#blogTable4 tr:last').after(insert);
        }
    });
});




