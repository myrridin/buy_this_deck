var decks = $('.deck-group');

decks.map(function(deck_index) {
    var deck = decks[deck_index];

    var rows = $(deck).find('.sorted-by-overview-container .row');
    var base_url = "http://store.tcgplayer.com/list/selectproductmagic.aspx?&c="
    var card_list = "";

    rows.map(function(i) {
        var name = $(rows[i]).find('.card-name a').first().html();
        var count = $(rows[i]).find('.card-count').first().html();
        card_list += encodeURIComponent(count + " " + name + "||");
    });


    var full_url = base_url + card_list;
    console.log("FULL URL: ", full_url);

    var target_html = "";
    target_html += '<span style="font-size: 0; display: block; position: absolute; top: 0px; right: 89px;">';
    target_html += '<a style="color: #fff; font-size: 12px; padding: 7px 10px; min-width: 200px; margin-right: 48px; background: #4d4d4d; display: inline-block; cursor: pointer; height: 28px;" href="' + full_url + '" target="_blank">';
    target_html += 'Buy From TCGPlayer.com';
    target_html += '</a>';
    target_html += '</span>';

    $(deck).find('.decklist-icons').prepend(target_html);
});
