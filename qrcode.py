#
# This python file will automatically generate a qrcode.png file, and send to
# the server (typescript)
#

import segno

data = "https://www.youtube.com/watch?v=kegy7ovczJs"

name_of_the_qrcode = "new_qrcode"
format_of_the_qrcode = ".png"

my_first_QRcode = segno.make(data)
my_first_QRcode.save( name_of_the_qrcode + format_of_the_qrcode , scale=4, finder_dark='darkred')