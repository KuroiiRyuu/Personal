import phonenumbers
from phonenumbers import geocoder, carrier

phone_number1 = phonenumbers.parse("")

Carrier = carrier.name_for_number(phone_number1, 'es')

Region = geocoder.description_for_number(phone_number1, 'es')


print(Carrier)
print(Region)