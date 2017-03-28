### Foto Finder, a photo album

#### Phase One

* Two input fields for new photos to put in the album
* One for the title of the photo
* One input field to upload the photo   
* One “Add to Album” button for adding the photo to the album so you see it on the page.   
* A section for all of the photos in the album to live   

#### Phase Two

* When a user fills in the Title, Caption, selects an image file from the photos directory, and then clicks the “Add to Album”, the photo should be added to the photo album.   
* Each photo, when added to the album, is placed in a “card”, and each photo card should display:
    * The photo
    * The title of the photo
    * The caption of the photo
    * A button to mark the photo as a “Favorite”
    * A button to “Remove” the photo from the album
* The application should be responsive and work equally well on desktop and mobile   
* When the user clicks on the “Favorite” button, the photo card background turns (a different color), and the button text color changes   
* When the user clicks on the “Remove” button, the photo should be removed from the page   

#### Phase Three

* If the user does not have text in the Title or Caption input elements, or they have not selected a photo from the photos directory, then the “Add to Album” button should be disabled.
* If there are no photos in the album yet, then there should be an indication to the user to add photos, displayed in the empty photo section.
* The file selector should only allow image file types
Extensions

* Sorting: If a user marks a photo as a “Favorite”, then that photo (an all other photos marked as favorites) should show at the top of the page before any other photos.

* Image Analysis: Mathematically determine the most prominent color of the photos in the album, and change the background of the album section to that prominent color. The background color should be calculated every time a new photo is added to the album.

* Animations: When a user removes a photo, the photos in the album shift almost instantly, which is a sharp, hard transition. Add a soft, brief animation that lets the remaining photos move smoothly.

* Zoom View: When a user clicks on an image card, the application should pop up a large view of the image overlaid on the rest of the album. Once in zoom view, the user should be able to click something on the image (like an “X”) to exit out of the zoom view and see all of the images in the album as before.
