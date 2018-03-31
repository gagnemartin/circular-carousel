# Circular Slider

A circular slider that loops an infinite number of times.

### Installing

Include the CSS file in your \<head> tag
```html
<link rel="stylesheet" type="text/css" href="assets/css/slider.css">
```

Include the script right before the end of the \<body> tag

```html
<script src="assets/js/slider.js"></script>
```

Right after the include, start the app

```javascript
<script src="slider.js"></script>
<script>
    var slider = new Slider()
</script>
```
### Configuration
Configuring the app
```javascript
<script src="slider.js"></script>
<script>
    var slider = new Slider({
        container: '.cs-wrap', // Needed. Class of the slider container
        slides: '.cs-el', // Needed. Class of every slides
        speed: 40 // Optional. Default 50
    })
</script>
```
To ensure the good functioning of the script, please follow this HTML structure for the slider with your own classes

```html
<div class="cs-wrap">
    <div class="cs-body">
        <ul>
            <li class="cs-el">
                <!-- Elements -->
            </li>
        </ul>
    </div>
</div>
``` 

## Authors

* **Martin Gagné** - *Initial work* - [martin_gagne@outlook.com](mailto:martin_gagne@outlook.com)