/**
 * Created by Martin on 2017-09-06.
 */

var Slider = function(options)
{
	var slider = this
	this.options = options

	// Check the configuration. Throw errors if needed
	this.checkConfiguration()

	// The element wrapper
	this.el = document.querySelector(options.container)

	// Keep the position for the drag
	/*this.position = {
		start: 0,
		current: 0,
		end: 0
	}*/

	// The slides inside the element
	this.slides = this.el.querySelectorAll('.cs-el')

	// Width of the parent to determine the width of the widget
	var elWidth = this.el.parentElement.offsetWidth

	// Crop the element by 3/4 to only see the top of the wheel
	this.dim = {
		width: (((elWidth / 4) * 2) / 2)
	}

	// Body the of element
	var $csBody = this.el.querySelector('.cs-body')

	this.el.style.height = this.dim.width + 'px'
	$csBody.style.height = elWidth + 'px'
	$csBody.style.width = elWidth + 'px'

	var slidesCount = this.slides.length

	// Position the slides
	if (slidesCount > 0) {
		var slide
		var centralAngle = 360 / slidesCount
		var translate = elWidth / 2
		var currentAngle = 0

		$csBody.style.rotate = 'rotate(-' + currentAngle + 'deg)'

		for (var i = 0; i < slidesCount; i++) {
			slide = this.slides[i]

			slide.style.transform = 'rotate(' + currentAngle + 'deg) translate(0, -' + translate + 'px)'
			//slide.style.width = translate + 'px';
			//slide.style.height = translate + 'px';

			currentAngle += centralAngle
		}
	}

	// The automatic rotation of the element
	if (this.options.rotate !== false) {
		$csBody.style.animationDuration = this.options.rotate
		$csBody.classList.add('cs-rotate')
	} /*else {
		var dragged
		var rotate


		slider.el.addEventListener('mousedown', function(e) {
			slider.position.start = e.clientX
			//dragged.style.transform = 'rotation'

			slider.el.addEventListener('mousemove', function(e) {
				rotate = (e.clientX - slider.position.start) - 90
				console.log(rotate)
				slider.el.style.transform = 'rotation(' + rotate + ')deg';
			})
		})

		slider.el.addEventListener('dragend', function(e) {
			//slider.el.removeEventListener('mousemove')
		})
	}*/

}

Slider.prototype.checkConfiguration = function () {
	if (!this.options.container) {
		var e = new Error('No container selector found in the configuration. Add the following: var slider = new Slider({ container: "SELECTOR" })');
		throw e
	}

	if (!this.options.slides) {
		var e = new Error('No slide selector found in the configuration. Add the following: var slider = new Slider({ slides: "SELECTOR" })');
		throw e
	}

	if (!this.options.speed) {
		this.options.speed = '50s'
	} else {
		if (!Number.isInteger(this.options.speed)) {
			var e = new Error('The rotation speed must be an integer');
			throw e
		}
	}
}

Number.isInteger = Number.isInteger || function(value) {
		return typeof value === 'number' &&
			isFinite(value) &&
			Math.floor(value) === value;
	};
