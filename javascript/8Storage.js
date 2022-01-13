localstorage
> persistant storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.removeItem('mycity')
undefined
localStorage.setItem('mycity','Delhi')

sessionStorage
> temp storage
> save wrt to tab
> remove as soon as you close the tab

sessionStorage.setItem("key",876767776)
undefined
sessionStorage.getItem("key")
'876767776'
sessionStorage.removeItem("key")

cookies
> save wrt to website
> expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.453053253.1642043043; _gat_gtag_UA_131256843_1=1'
document.cookie ="city=delhi; expires=Fri, 14 Jan 2022 01:00:00 UTC"
'city=delhi; expires=Fri, 14 Jan 2022 01:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.453053253.1642043043; city=delhi'