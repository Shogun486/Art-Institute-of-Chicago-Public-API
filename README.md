Website leveraging the _Art Institute of Chicago's Public API_
==========

This website is designed to replicate a visitor's experience at the Art Institute of Chicago (AIC).
When walking inside the AIC, different artworks of different sizes can be found, therefore you'll
find that all images on this website are of different sizes, too. You can find images based on what
you're looking for . . . do you want to see Picasso's works? Well, simply search 'Picasso' in the 
search bar, and you'll find all artifacts where the API's metadata has any mention of him. The frontend
design of this website is simplistic so you can admire all of the museum's public data from the comfort
of your own home. 

## Demo
Click [here] to see a demo of this app. 

## API Details
The [AIC's REST API] holds the museum's public data. The image files you see are not from this API, but
instead must be acquired through a different URL following [IIIF Image API] standards. Within [ArtCard.jsx], 
you'll find that image requests are made with the URL suffix '/full/843,/0/default.jpg' because IIIF supports 
multiple image display options, but this particular display option is what's used by AIC's website. Therefore, 
images will load much faster on your end if you stick with this option.

## Tools
This website is supported by React and Tailwind CSS. For installation instructions, please refer to 
the [React] and [Tailwind] docs. 


[React]: https://react.dev/learn/installation
[Tailwind]: https://tailwindcss.com/docs/installation
[here]: https://drive.google.com/file/d/1A5xGm_-8rjULD2RZ3O8BUB6D6p1UUQA_/view
[AIC's REST API]: https://api.artic.edu/docs/#scraping-data
[IIIF Image API]: https://iiif.io/api/image/2.0/
[ArtCard.jsx]: https://github.com/Shogun486/Art-Institute-of-Chicago-Public-API/blob/main/src/ArtCard.jsx
