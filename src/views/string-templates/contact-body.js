const contactHTML = `<div class="contact__background">
<div class="padding__container-MOBILE-NONE">

  <div class="contact">
    <div class="contact__description">
      <div class="contact__description-container">
        
        <h2 class="contact__description-container-headline">Contact Us</h2>
        <p class="contact__description-container-paragraph">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>

      </div>
    </div>
    <div class="contact__form">
      <form action="/contact" method="post">
        <div class="contact__form-item">
          <input  type="text" name="Name" id="CONTACT-NAME" class="contact__form-item-input" minlength="1" required>
          <span class="contact__form-item-placeholder">Name</span>
          <span class="contact__form-item-alert display-none" id="NAME-ALERT-TEXT">Alert<img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON"></span>
        </div>

        <div class="contact__form-item">
          <input type="text" name="Email" id="CONTACT-EMAIL" class="contact__form-item-input" minlength="1" required>
          <span class="contact__form-item-placeholder">Email</span>
          <span class="contact__form-item-alert display-none" id="EMAIL-ALERT-TEXT">Alert<img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON"></span>
        </div>  

        <div class="contact__form-item">
          <input type="text" name="Phone" id="CONTACT-PHONE" class="contact__form-item-input" minlength="1" required>
          <span class="contact__form-item-placeholder">Phone</span>
          <span class="contact__form-item-alert display-none" id="PHONE-ALERT-TEXT">Alert<img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON"></span>
        </div>

        <div class="contact__form-item contact__form-item-MESSAGE">
          <textarea name="Message" id="CONTACT-MESSAGE" class="contact__form-item-input contact__form-item-input-MESSAGE" cols="30" rows="10" minlength="1" required></textarea>
          <span class="contact__form-item-placeholder">Message</span>
          <span class="contact__form-item-alert display-none" id="MESSAGE-ALERT-TEXT">Alert<img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON"></span>
        </div>

        <button type="submit" class="contact__form-submit" id="SUBMIT">Submit</button>

      </form>
    </div>
  </div>

</div>

<div class="padding__container-ALWAYS">
  <div class="location">
    <div class="location-card SLIDE-IN">
      <div class="location-card__image">
        <img src="./assets/shared/desktop/illustration-canada.svg" alt="Toronto, Canada illustration">
      </div>
      <div class="location-card__content">
          <span class="location-card__content-name">Canada</span>
        <a href="/locations#Canada" class="location-card__content-button LOCATIONS">See Location</a>
      </div>
    </div>

    <div class="location-card SLIDE-IN">
      <div class="location-card__image location-card__image-AUSTRALIA">
        <img src="./assets/shared/desktop/illustration-australia.svg" alt="Sydney Opera House illustration">
      </div>
      <div class="location-card__content">
          <span class="location-card__content-name">Australia</span>
        <a href="/locations#Australia" class="location-card__content-button LOCATIONS">See Location</a>
      </div>
    </div>

    <div class="location-card SLIDE-IN">
      <div class="location-card__image location-card__image-UK">
        <img src="./assets/shared/desktop/illustration-united-kingdom.svg" alt="London bridge illustration">
      </div>
      <div class="location-card__content">
        <span class="location-card__content-name">United Kingdom</span>
        <a href="/locations#United-Kingdom" class="location-card__content-button LOCATIONS">See Location</a>
      </div>
    </div>

  </div>
</div>

</div>`

module.exports = contactHTML; 