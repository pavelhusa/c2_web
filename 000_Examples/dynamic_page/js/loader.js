    $(document).ready(function() {
        $('#content').load('./home.html');

        $('#navigation a').click(function(e) {
            e.preventDefault();
            console.log(e.target.href);
            $("#content").load(e.target.href);
        })
    });