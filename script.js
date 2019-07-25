window.onload = function () {
    $(function () {
        $("#phone").mask("+7 (999) 999-99-99");
    });


    function calendarBig(year) {

        for (var m = 0; m <= 11; m++) {
            var D = new Date(year, [m], 1),
                Dlast = new Date(D.getFullYear(), D.getMonth() + 1, 0).getDate(),
                DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
                DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
                calendar = '<tr>';

            if (DNfirst != 0) {
                for (var i = 1; i < DNfirst; i++) calendar += '<td class="day" id="'+[i]+'">';
            } else {
                for (var i = 0; i < 6; i++) calendar += '<td class="day" id="'+[i]+'">';
            }

            for (var i = 1; i <= Dlast; i++) {
                if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                    calendar += '<td class="today day" id="'+[i]+'">' + i;
                } else {
                    if (
                        (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) ||
                        (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) ||
                        ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) ||
                        (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) ||
                        (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) ||
                        (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) ||
                        (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) ||
                        (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) ||
                        (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) ||
                        (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) ||
                        (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) ||
                        (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004)
                    ) {
                        calendar += '<td class="day" id="'+[i]+'">' + i;
                    } else {
                        calendar += '<td class="day" id="'+[i]+'">' + i;
                    }
                }
                if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                    calendar += '<tr>';
                }
            }
            document.querySelector('#calendarBig table[data-m="' + [m] + '"] tbody').innerHTML = calendar;

        }
    }

    calendarBig(new Date().getFullYear());

    function calendarBigG() {
        calendarBig(this.innerHTML.replace(/[^\d]/gi, ''));
    }


    selectDay = 0;
    selectMonth = 0;
    $('.day').click(function (event) {
        $(this).css('background', 'red');
        selectMonth = $(this).closest('table').attr('data-m');
        selectDay = $(this).html();
    });
    $('#tobook').click(function () {
        if (document.getElementById('phone').value != "" && selectDay != 0) {
            var phone = document.getElementById('phone').value;
            $.ajax({
                // url: "/index.html",
                url: "http://127.0.0.1:8000",
                type: "POST",
                data: {
                      selectDay,
                      selectMonth,
                      phone
                },
                dataType: "json",
                success: alert("Вы успешно забронировали!"),
            });
        }
        ;

    });
    $.get( "http://127.0.0.1:8000", "json", function( data ) {
      var datanew=data.split('&');
        var day =datanew[0].split('=');
        var month =datanew[1].split('=')
        day.splice(0,1);
        month.splice(0,1);
        document.getElementById(month).getElementsByClassName(day).background = "#ff002a"; //не работает
        console.log(day + "," + month);
         
      })
        }
    

