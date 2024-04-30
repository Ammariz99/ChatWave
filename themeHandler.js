/*=====================Theme Customization========================*/

class ThemeButtonHandler {
    constructor() {
      this.themeButton = document.querySelector('#theme');
      this.handleThemeButtonClick = this.handleThemeButtonClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.themeButton.addEventListener('click', this.handleThemeButtonClick);
    }
  
    handleThemeButtonClick() {
      document.querySelector('.theme-customize').style.display = 'flex';
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.themeButton.removeEventListener('click', this.handleThemeButtonClick);
    }
  }
  const themeButtonHandler = new ThemeButtonHandler();
  
  /*****************Font Sizing*********************/
  
  class FontSizeHandler {
    constructor() {
      this.fontSizes = document.querySelectorAll('.choose-size span');
      this.handleFontSizeClick = this.handleFontSizeClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.fontSizes.forEach(size => {
        size.addEventListener('click', this.handleFontSizeClick);
      });
    }
  
    handleFontSizeClick(event) {
      const selectedSize = event.currentTarget;
      let fontSizeValue;
      this.removeSelectorActive();
      selectedSize.classList.add('active');
      if (selectedSize.classList.contains('font-size-1')) {
        fontSizeValue = '10px';
      } else if (selectedSize.classList.contains('font-size-2')) {
        fontSizeValue = '13px';
      } else if (selectedSize.classList.contains('font-size-3')) {
        fontSizeValue = '16px';
      } else if (selectedSize.classList.contains('font-size-4')) {
        fontSizeValue = '19px';
      } else if (selectedSize.classList.contains('font-size-5')) {
        fontSizeValue = '22px';
      }
      document.querySelector('html').style.fontSize = fontSizeValue;
    }
  
    removeSelectorActive() {
      this.fontSizes.forEach(size => {
        size.classList.remove('active');
      });
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.fontSizes.forEach(size => {
        size.removeEventListener('click', this.handleFontSizeClick);
      });
    }
  }
  const fontSizeHandler = new FontSizeHandler();
  
  
  /*****************Color Change*********************/
  
  class ColorPaletteHandler {
    constructor() {
      this.colorPalette = document.querySelectorAll('.choose-color span');
      this.root = document.querySelector(':root');
      this.handleColorClick = this.handleColorClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.colorPalette.forEach(color => {
        color.addEventListener('click', this.handleColorClick);
      });
    }
  
    handleColorClick(event) {
      const selectedColor = event.currentTarget;
      let primaryHue;
      this.removeActiveColor();
      selectedColor.classList.add('active');
      if (selectedColor.classList.contains('color-1')) {
        primaryHue = 252;
      } else if (selectedColor.classList.contains('color-2')) {
        primaryHue = 52;
      } else if (selectedColor.classList.contains('color-3')) {
        primaryHue = 352;
      } else if (selectedColor.classList.contains('color-4')) {
        primaryHue = 152;
      } else if (selectedColor.classList.contains('color-5')) {
        primaryHue = 202;
      }
      this.root.style.setProperty('--primaryColorHue', primaryHue + ''); 
    }
  
    removeActiveColor() {
      this.colorPalette.forEach(color => {
        color.classList.remove('active');
      });
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.colorPalette.forEach(color => {
        color.removeEventListener('click', this.handleColorClick);
      });
    }
  }
  const colorPaletteHandler = new ColorPaletteHandler();
  
  
  /******************Background Change*********************/
  
  class BackgroundThemeHandler {
    constructor() {
      this.bg1 = document.querySelector('.bg1');
      this.bg2 = document.querySelector('.bg2');
      this.root = document.querySelector(':root');
      this.darkColorTheme = '95%';
      this.lightColorTheme = '5%';
      this.whiteColorTheme = '10%';
      this.changeBg = this.changeBg.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.bg2.addEventListener('click', () => {
        this.setThemes(this.darkColorTheme, this.lightColorTheme, this.whiteColorTheme);
        this.bg2.classList.add('active');
        this.bg1.classList.remove('active');
      });
  
      this.bg1.addEventListener('click', () => {
        window.location.reload(); // Reload the page
      });
    }
  
    setThemes(dark, light, white) {
      this.root.style.setProperty('--colorDarkLightForMode', dark + '');
      this.root.style.setProperty('--colorLightForMode', light + '');
      this.root.style.setProperty('--colorWhiteForMode', white + '');
    }
  
    changeBg() {
      console.log('Changing background');
      this.setThemes(this.darkColorTheme, this.lightColorTheme, this.whiteColorTheme);
    }
  }
  const backgroundThemeHandler = new BackgroundThemeHandler();
  