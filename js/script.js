var org = 0;
$('.area').on('input', function() {

    if ($(this).val() === "") {
        alert("empty");
    } else {
        if (org > 0) {
            $("div").text((Date.now() - org) / 1000);
            org = Date.now();
        } else {
            org = Date.now()
        }
    }
});
