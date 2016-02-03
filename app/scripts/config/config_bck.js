angular.module('carouselApp.dev', [])
    .constant('CONFIG', {
        slideSpeed: 300,
        paginationSpeed: 400,
        list: [
          {
            image: 'url or relative',
            text: "Slide 1",
            id: 1
          },
          {
            image: 'url or relative',
            text: "Slide 2",
            id: 2
          },
          {
            image: 'url or relative',
            text: "Slide 3",
            id: 3
          },
          {
            image: 'url or relative',
            text: "Slide 4",
            id: 4
          }
        ]
    });
