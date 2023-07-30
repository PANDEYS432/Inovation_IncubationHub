window.onload = function() {
    const header = document.querySelector('header');
    header.style.animationPlayState = 'running';
  
    const container = document.querySelector('.container');
    container.style.animationPlayState = 'running';
  
    const footer = document.querySelector('footer');
    footer.style.animationPlayState = 'running';
  };
  const images = [
    {
      url: 'NEP.png',
      subtitle: 'National Education Policy 2020 & Tech Startups',
      date: 'July 20, 2022'
    },
    {
      url: 'Maghmela.png',
      subtitle: 'Swab Lambi Bharat Abhiyan at Magh Mela',
      date: 'Jan 28, 2023'
    },
    
    {
      url: 'IIc.png',
      subtitle: 'IIC Startup Battle',
      date: 'Feb 11, 2023'
    },
    {
      url: 'logode.png',
      subtitle: 'Logo Design Competition',
      date: 'Feb 17, 2023'
    },
    {
      url: 'DPIIT.png',
      subtitle: 'Expert Lecture on Registration of DPIIT and Start in UP ',
      date: 'Feb 21, 2023'
    },
    {
      url: 'apdc.png',
      subtitle: 'Awareness Program on Design Component',
      date: 'March 23-28, 2023'
    },
  ];
  function createGallery() {
    const gallery = document.getElementById('gallery');
  
    images.forEach(image => {
      const imageElement = document.createElement('img');
      imageElement.src = image.url;
      imageElement.alt = image.subtitle;
      imageElement.className = 'image';
  
      const subtitleElement = document.createElement('p');
      subtitleElement.textContent = `${image.subtitle} - ${image.date}`;
      subtitleElement.className = 'subtitle';
  
      const container = document.createElement('div');
      container.appendChild(imageElement);
      container.appendChild(subtitleElement);
  
      gallery.appendChild(container);
    });
  }
  
  // Call the function to populate the gallery
  createGallery();
