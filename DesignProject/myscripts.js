let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function Demo_Justified() {
        jQuery("#nanogallery").nanogallery2({

          // CONTENT SOURCE
          // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
          kind: 'nano_photos_provider2',
          dataProvider: 'https://nano.gallery/ngy2/demo5/nano_photos_provider2/nano_photos_provider2.php',
          album: 'people',
          
          // GALLERY AND THUMBNAIL LAYOUT
          thumbnailHeight: '250', thumbnailWidth: 'auto',
          galleryDisplayMode: 'pagination',                 // gallery pagination mode
          galleryMaxRows: 3,                                // gallery with max 3 rows
          gallerySorting: 'random',
          thumbnailAlignment: 'fillWidth',
          thumbnailL1GutterWidth: 20,
          thumbnailL1GutterHeight: 20,
          thumbnailBorderHorizontal: 1,
          thumbnailBorderVertical: 1,

          // THUMBNAIL TOOLS & LABEL
          thumbnailL1Label: { display: true, position:'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left'},
          thumbnailToolbarImage :  { topLeft: 'select', bottomRight : 'featured,display,download,info,cart' },

          // DISPLAY ANIMATION
          thumbnailDisplayTransition: 'flipUp',       // thumbnail display animation
          thumbnailDisplayTransitionDuration: 400,
          thumbnailDisplayInterval: 200,
          thumbnailDisplayOrder: 'rowByRow',

          // THUMBNAIL'S HOVER ANIMATION
          thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown',
          touchAnimation: true,
          touchAutoOpenDelay: -1,

          // GALLERY THEME
          galleryTheme : { 
            thumbnail: { titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#fff' },
            navigationPagination :  { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
          },
          
          // callback to customize the content of the media info popup
          fnPopupMediaInfo: my_popup_info,
          
          // DEEP LINKING
          locationHash: false
        });
        
        // Function called before the popup for media info is displayed
        // Content and title can be changed
        function my_popup_info(item, title, content){
          var my_title = title + ' <b>nanogallery2</b>';
          var my_content = content + '<br><br>[The content of this popup can be customized with some javascript.]';
          return {title: my_title, content: my_content};
        }
}
