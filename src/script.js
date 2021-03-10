$(document).ready(() => {
  $('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('active');
    $(this).find("i").toggleClass('fa-bars');
    $(this).find("i").toggleClass('fa-times');
  });

  const slickOptons = {
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>'
  };

  $('.slider').slick(slickOptons);

  $('.footer__form-button').on('click', () => {
    const email = $('#email').val();

    const emailOptions = {
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'contatos@studion.com',
      From : email,
      Subject : "For favor me adicione na newsletter",
      Body : `Olá,
      
      Eu gostaria de ser adicionado na newsletter do site,
      meu e-mail é ${email}.

      Obrigado!
      `
    }

    Email.send(emailOptions).then(
      message => alert(message)
    );
  });
});